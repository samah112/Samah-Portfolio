import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { PORTFOLIO_CONFIG } from '../../config';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

// Custom Official LinkedIn Vector Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Custom Official GitHub Vector Icon
const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Custom Official WhatsApp Vector Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.04 8.04 0 01-1.24-4.29c0-4.44 3.61-8.05 8.05-8.05 2.15 0 4.17.84 5.69 2.36a8.01 8.01 0 012.35 5.68c0 4.44-3.62 8.06-8.06 8.06zm4.41-6.03c-.24-.12-1.43-.71-1.65-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { isRTL } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactChannels = [
    {
      id: 'email',
      title: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: PORTFOLIO_CONFIG.contact.email,
      href: `mailto:${PORTFOLIO_CONFIG.contact.email}`,
      displayValue: PORTFOLIO_CONFIG.contact.email,
      subtext: isRTL ? 'تواصل مباشر عبر البريد' : 'Direct Email Contact',
      icon: Mail,
      iconBg: 'from-[#D9CFE8] via-[#BDE5EF] to-[#81C8D4]',
      isCopyable: true,
      actionText: isRTL ? 'إرسال إيميل' : 'Send Email',
    },
    {
      id: 'whatsapp',
      title: isRTL ? 'واتساب' : 'WhatsApp',
      value: PORTFOLIO_CONFIG.contact.whatsapp,
      href: PORTFOLIO_CONFIG.contact.whatsapp,
      displayValue: isRTL ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp',
      subtext: isRTL ? 'مراسلة وتواصل مباشر' : 'Instant Direct Messaging',
      customIcon: WhatsAppIcon,
      iconBg: 'from-[#81C8D4] via-[#CFEBDD] to-[#BDE5EF]',
      isExternal: true,
      actionText: isRTL ? 'فتح واتساب' : 'Open WhatsApp',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: PORTFOLIO_CONFIG.contact.linkedin,
      href: PORTFOLIO_CONFIG.contact.linkedin,
      displayValue: isRTL ? 'سماح باسودان' : 'Samah A.Basoodan',
      subtext: isRTL ? 'تواصل عبر لينكد إن' : 'Connect on LinkedIn',
      customIcon: LinkedInIcon,
      iconBg: 'from-[#BDE5EF] via-[#C9E8F2] to-[#D9CFE8]',
      isExternal: true,
      actionText: isRTL ? 'زيارة الحساب' : 'View Profile',
    },
    {
      id: 'github',
      title: 'GitHub',
      value: PORTFOLIO_CONFIG.contact.github,
      href: PORTFOLIO_CONFIG.contact.github,
      displayValue: 'samah112',
      subtext: isRTL ? 'المستودعات البرمجية والبحثية' : 'Code & Research Repositories',
      customIcon: GitHubIcon,
      iconBg: 'from-[#D9CFE8] via-[#BDE5EF] to-[#9b87c8]',
      iconTextColor: 'text-[#261F2D] dark:text-white',
      isExternal: true,
      actionText: isRTL ? 'زيارة الحساب' : 'View Profile',
    },
  ].filter((channel) => Boolean(channel.href));

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#080808] dark:text-white bg-white/80 dark:bg-white/10 border border-white/90 dark:border-white/15 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8E84D4] dark:text-[#81C8D4]" />
            <span>{isRTL ? 'تواصل معي' : 'Contact & Connect'}</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#080808] dark:text-white tracking-tight">
            {isRTL ? 'قنوات التواصل المباشر' : 'Let\'s Connect & Collaborate'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#525252] dark:text-[hsl(270,15%,92%)] font-medium leading-relaxed">
            {isRTL
              ? 'يسعدني التواصل والتعاون في أبحاث الذكاء الاصطناعي، الابتكارات الطبية، والمشاريع التقنية.'
              : 'Available for AI research inquiries, biomedical engineering innovations, and technology projects.'}
          </p>
        </motion.div>

        {/* 4 Clean High-Tech Contact Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${contactChannels.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-4 sm:gap-5`}>
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            const CustomIcon = channel.customIcon;
            const isCopied = copiedKey === channel.id;

            return (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 35, scale: 0.95, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-6 rounded-3xl bg-white/45 hover:bg-white/65 dark:bg-gradient-to-br dark:from-[#1d1336]/90 dark:via-[#16132b]/90 dark:to-[#111a28]/90 backdrop-blur-2xl border border-white/70 hover:border-white/90 dark:border-white/12 shadow-[0_16px_36px_-10px_rgba(38,31,45,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(38,31,45,0.08)] transition-all flex flex-col justify-between"
              >
                {/* Header: Clean Icon */}
                <div className="mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${channel.iconBg} ${
                      channel.iconTextColor || 'text-[#261F2D] dark:text-white'
                    } flex items-center justify-center shadow-xs border border-white/60 dark:border-white/15 group-hover:scale-110 transition-transform`}
                  >
                    {CustomIcon ? (
                      <CustomIcon className="w-6 h-6" />
                    ) : (
                      Icon && <Icon className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#786B7F] dark:text-[hsl(270,10%,65%)] block mb-1">
                    {channel.title}
                  </span>
                  
                  <a
                    href={channel.href}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                    className="font-display font-extrabold text-base text-[#261F2D] dark:text-white hover:text-[#915EBD] dark:hover:text-[#81C8D4] transition-colors break-all block leading-snug"
                  >
                    {channel.displayValue}
                  </a>

                  <span className="text-xs font-medium text-[#786B7F] dark:text-[hsl(270,15%,85%)] block mt-1.5">
                    {channel.subtext}
                  </span>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#D9CFE8]/60 dark:border-white/10">
                  <a
                    href={channel.href}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <span>{channel.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>

                  {channel.isCopyable && (
                    <button
                      onClick={() => copyToClipboard(channel.value, channel.id)}
                      title={isRTL ? 'نسخ' : 'Copy'}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 shadow-2xs'
                          : 'bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-white border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs'
                      }`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-[#786B7F] dark:text-white" />
                      )}
                    </button>
                  )}
                </div>

                {/* Copied Feedback floating toast */}
                {isCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md pointer-events-none"
                  >
                    {isRTL ? 'تم النسخ بنجاح!' : 'Copied to Clipboard!'}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
