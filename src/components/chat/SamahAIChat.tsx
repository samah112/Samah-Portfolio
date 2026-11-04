import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AI_ASSISTANT_CONTENT } from '../../data/portfolioContent';
import { ChatMessage } from '../../types';
import { Bot, Send, X, Trash2, User, Copy, Check, Sparkles, Square } from 'lucide-react';

interface SamahAIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

function cleanStars(str: string): string {
  if (!str) return '';
  return str.replace(/\*{1,3}/g, '');
}

export const SamahAIChat: React.FC<SamahAIChatProps> = ({ isOpen, onClose }) => {
  const { language, t, isRTL } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Initialize with localized welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'assistant',
          text: cleanStars(t(AI_ASSISTANT_CONTENT.welcomeBubble)),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [language, messages.length, t]);

  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = (customText || input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const botMessageId = (Date.now() + 1).toString();
    const placeholderBotMessage: ChatMessage = {
      id: botMessageId,
      sender: 'assistant',
      text: '',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, placeholderBotMessage]);

    abortControllerRef.current = new AbortController();

    try {
      // Stream SSE endpoint
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          language,
          history: messages.slice(-5).map((m) => ({
            sender: m.sender,
            text: cleanStars(m.text),
          })),
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error('Streaming failed, falling back to basic response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let accumulatedText = '';
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;

          const jsonStr = trimmed.replace(/^data:\s*/, '');
          if (!jsonStr) continue;

          try {
            const data = JSON.parse(jsonStr);
            if (data.chunk) {
              accumulatedText += data.chunk;
              const sanitized = cleanStars(accumulatedText);
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId
                    ? { ...msg, text: sanitized, isStreaming: true }
                    : msg
                )
              );
            }
            if (data.done) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === botMessageId
                    ? { ...msg, isStreaming: false }
                    : msg
                )
              );
            }
          } catch {
            // Ignore malformed chunks
          }
        }
      }

      // Final cleanup
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, text: cleanStars(msg.text), isStreaming: false }
            : msg
        )
      );
    } catch (err: any) {
      if (err.name === 'AbortError') {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId
              ? { ...msg, isStreaming: false }
              : msg
          )
        );
      } else {
        // Fallback non-streaming call (the API key stays on the server)
        {
          try {
            const fallbackRes = await fetch('/api/chat', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                message: textToSend,
                language,
                history: messages.slice(-5).map((m) => ({
                  sender: m.sender,
                  text: cleanStars(m.text),
                })),
              }),
            });
            const data = await fallbackRes.json();
            const replyText = cleanStars(data.reply || (isRTL ? 'يسعدني الإجابة عن أي استفسار حول أبحاث ومشاريع سماح باسودان والذكاء الاصطناعي.' : "I'm here to help answer questions about Samah's research, AI, and innovations."));

            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessageId
                  ? { ...msg, text: replyText, isStreaming: false }
                  : msg
              )
            );
          } catch {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === botMessageId
                  ? {
                      ...msg,
                      text: isRTL
                        ? 'أنا هنا لمساعدتك في استكشاف أبحاث ومشاريع سماح باسودان والذكاء الاصطناعي. يمكنك تجربة سؤال آخر أو استعراض أقسام الموقع.'
                        : "I'm here to help explore Samah's research, projects, and AI concepts. Feel free to try another prompt.",
                      isStreaming: false,
                    }
                  : msg
              )
            );
          }
        }
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'assistant',
        text: isRTL
          ? 'تم مسح المحادثة. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن أبحاث ومشاريع سماح باسودان، أو أي استفسار علمي وتقني.'
          : 'Conversation cleared. How can I help you today? Ask me anything about Samah’s research, projects, or any technical topic.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/45 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-dialog-title"
    >
      <div
        className="relative w-full max-w-lg h-[90vh] max-h-[700px] bg-[#FAF9FB] dark:bg-[#130e24] rounded-3xl shadow-2xl border border-black/10 dark:border-white/15 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Soft Pastel Gradient */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/25 shadow-sm">
              <Bot className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="ai-dialog-title" className="font-display font-bold text-sm text-white">
                  {t(AI_ASSISTANT_CONTENT.headerTitle)}
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/25 inline-flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                  {isRTL ? 'ذكاء موسع' : 'Expanded AI'}
                </span>
              </div>
              <p className="text-[11px] text-white/90">
                {t(AI_ASSISTANT_CONTENT.headerSubtitle)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleClear}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              title={t(AI_ASSISTANT_CONTENT.clearChat)}
              aria-label="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream: Calm Eye-Friendly Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F5F2F7] dark:bg-[#0d0918] scroll-smooth">
          {messages.map((msg) => {
            const isBot = msg.sender === 'assistant';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${
                    isBot
                      ? 'bg-white dark:bg-[#1a142c] text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs'
                      : 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-2xs'
                  }`}
                >
                  {isBot ? <Bot className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" /> : <User className="w-3.5 h-3.5" />}
                </div>

                {/* Bubble with Comfortable Contrast */}
                <div
                  className={`relative group max-w-[85%] sm:max-w-[80%] p-4 rounded-2xl text-[13px] sm:text-sm leading-relaxed ${
                    isBot
                      ? 'bg-white dark:bg-[#1a142c] text-[#261F2D] dark:text-[hsl(270,15%,92%)] border border-[#D9CFE8]/80 dark:border-white/10 shadow-2xs rounded-tl-xs'
                      : 'bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white shadow-xs rounded-tr-xs'
                  }`}
                >
                  {msg.isStreaming && !msg.text ? (
                    <div className="flex items-center gap-1.5 py-1 px-1">
                      <span className="w-2 h-2 rounded-full bg-[#9b87c8] animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-[#81c8d4] animate-pulse delay-150" />
                      <span className="w-2 h-2 rounded-full bg-[#9b87c8] animate-pulse delay-300" />
                    </div>
                  ) : (
                    <div className="whitespace-pre-line tracking-normal">
                      {msg.text}
                      {msg.isStreaming && (
                        <span className="inline-block w-1.5 h-4 bg-[#8E84D4] ml-1 rounded-full animate-pulse align-middle" />
                      )}
                    </div>
                  )}

                  {/* Metadata / Actions row */}
                  <div
                    className={`mt-2.5 pt-1.5 border-t ${
                      isBot ? 'border-black/5 dark:border-white/10 text-[#786B7F] dark:text-[hsl(270,10%,65%)]' : 'border-white/10 text-white/60'
                    } flex items-center justify-between text-[10px]`}
                  >
                    <span>{msg.timestamp}</span>

                    {isBot && msg.text && (
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="opacity-80 group-hover:opacity-100 transition-opacity p-0.5 hover:text-[#915EBD] dark:hover:text-white flex items-center gap-1 cursor-pointer"
                        title={isRTL ? 'نسخ النص' : 'Copy'}
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedId === msg.id ? (isRTL ? 'تم النسخ' : 'Copied') : (isRTL ? 'نسخ' : 'Copy')}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggested Questions Carousel */}
        <div className="px-4 py-2.5 bg-white/90 dark:bg-[#161228] border-t border-black/8 dark:border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-[#786B7F] dark:text-[hsl(270,10%,65%)] uppercase tracking-wider">
              {isRTL ? 'أسئلة مقترحة للاستكشاف' : 'Suggested Explorations'}
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {AI_ASSISTANT_CONTENT.suggestedQuestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(t(prompt))}
                disabled={isLoading}
                className="px-3 py-1.5 rounded-xl text-[11px] font-medium bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-white hover:border-[#915EBD]/40 dark:hover:border-[#81C8D4]/40 border border-[#D9CFE8]/80 dark:border-white/15 whitespace-nowrap transition-all cursor-pointer shrink-0 disabled:opacity-50 shadow-2xs"
              >
                {t(prompt)}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-white dark:bg-[#130e24] border-t border-black/8 dark:border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t(AI_ASSISTANT_CONTENT.inputPlaceholder)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-2xl bg-[#F5F2F7] dark:bg-[#1c162e] border border-black/10 dark:border-white/15 focus:border-[#915EBD] dark:focus:border-[#81C8D4] focus:bg-white dark:focus:bg-[#1c162e] focus:outline-none text-xs sm:text-sm text-[#261F2D] dark:text-white transition-all"
            />

            {isLoading ? (
              <button
                type="button"
                onClick={handleStop}
                className="px-3.5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 hover:opacity-95 text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                title={t(AI_ASSISTANT_CONTENT.stopGenerating)}
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">{t(AI_ASSISTANT_CONTENT.stopGenerating)}</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 disabled:opacity-40 text-white transition-all cursor-pointer shadow-sm"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export const AIChatLauncher: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { isRTL, t } = useLanguage();
  const [showWelcome, setShowWelcome] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) {
        window.clearTimeout(scrollTimer.current);
      }
      scrollTimer.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 lg:bottom-8 ${
        isRTL ? 'left-4 sm:left-8' : 'right-4 sm:right-8'
      } z-40 flex flex-col items-end gap-2`}
    >
      {/* Alert Greeting on desktop */}
      {showWelcome && (
        <div className="hidden md:block relative max-w-[250px] bg-white/95 dark:bg-[#1a142c]/95 backdrop-blur-md text-[#261F2D] dark:text-[hsl(270,15%,92%)] p-3.5 rounded-2xl border border-[#D9CFE8]/80 dark:border-white/15 shadow-xl text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowWelcome(false);
            }}
            className="absolute top-1.5 right-1.5 p-1 text-[#786B7F] dark:text-[hsl(270,10%,65%)] hover:text-[#261F2D] dark:hover:text-white cursor-pointer"
            aria-label="Dismiss greeting"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-2.5">
            <Bot className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed text-[#261F2D]/90 dark:text-[hsl(270,15%,92%)]">
              {cleanStars(t(AI_ASSISTANT_CONTENT.welcomeBubble))}
            </p>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={onClick}
        className={`group relative flex items-center rounded-full bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-300 cursor-pointer overflow-hidden ${
          isScrolling
            ? 'p-2.5 sm:px-4 sm:py-3 gap-0 sm:gap-2.5'
            : 'px-3.5 py-2.5 sm:px-4 sm:py-3 gap-2 sm:gap-2.5'
        }`}
        aria-label="Open Samah AI Chat"
      >
        <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0 border border-white/15">
          <Bot className="w-4 h-4 text-[#BFDDF4]" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0A0A0A]" />
        </div>

        {/* Text Label */}
        <span
          className={`font-display font-bold text-xs tracking-wide whitespace-nowrap transition-all duration-300 ${
            isScrolling
              ? 'max-w-0 opacity-0 md:max-w-[200px] md:opacity-100'
              : 'max-w-[200px] opacity-100'
          }`}
        >
          {t(AI_ASSISTANT_CONTENT.launcherTooltip)}
        </span>
      </button>
    </div>
  );
};

