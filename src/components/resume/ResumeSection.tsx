import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { PORTFOLIO_CONFIG } from '../../config';
import { 
  FileText, 
  Eye, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  X,
  Share2,
  FileCheck
} from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const pdfUrl = PORTFOLIO_CONFIG.resume.pdfUrl;
  const fileName = PORTFOLIO_CONFIG.resume.fileName;

  const handleDownload = () => {
    setDownloading(true);
    if (pdfUrl && pdfUrl.trim() !== '') {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setDownloading(false), 1500);
    } else {
      setTimeout(() => {
        setDownloading(false);
        setIsPreviewOpen(true);
      }, 400);
    }
  };

  const handleView = () => {
    if (pdfUrl && pdfUrl.trim() !== '') {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsPreviewOpen(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "#cv");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cv" className="py-8 sm:py-10 relative z-20 overflow-hidden">
      
      {/* Dynamic Ambient Floating Aurora Glow Behind Box */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.6, 0.35],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[550px] h-[220px] bg-gradient-to-r from-[#D9D2F3]/50 via-[#BFDDF4]/40 to-[#F3D4DE]/50 blur-[90px] rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Moving Interactive Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          className="relative group rounded-3xl p-[2px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(138,121,212,0.25)] hover:shadow-[0_25px_65px_-12px_rgba(138,121,212,0.4)] transition-all duration-500"
        >
          {/* Animated Flowing Iridescent Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D9D2F3] via-[#BFDDF4] via-[#F3D4DE] via-[#CFEBDD] to-[#D9D2F3] animate-gradient-flow rounded-3xl opacity-90 group-hover:opacity-100 transition-opacity" />

          {/* Shimmer Light Sweep on Border */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep pointer-events-none" />
          </div>

          {/* Inner Card Content */}
          <div className="relative w-full rounded-[22px] bg-white/90 dark:bg-gradient-to-br dark:from-[#1d1336]/95 dark:via-[#16132b]/95 dark:to-[#111a28]/95 backdrop-blur-2xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/90 dark:border-white/15 overflow-hidden">
            
            {/* Subtle internal animated background shine */}
            <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#D9D2F3]/15 dark:from-[#9b87c8]/15 via-transparent to-transparent pointer-events-none" />

            {/* Left/Right Info: Floating Luxury Icon + Clean Title */}
            <div className="flex items-center gap-4.5 w-full md:w-auto relative z-10">
              
              {/* Animated Floating 3D-effect Icon Container */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative shrink-0"
              >
                {/* Glowing pulsating halo ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D9D2F3] via-[#BFDDF4] to-[#F3D4DE] rounded-2xl blur-xs opacity-75 group-hover:opacity-100 animate-pulse-glow" />
                
                <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#080808] to-[#1e1e28] p-[1.5px] shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-[#0d0d14] rounded-[14px] flex items-center justify-center text-white relative overflow-hidden">
                    {/* Inner sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    <FileText className="w-6 h-6 text-[#D9D2F3] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
              
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#080808] dark:text-white tracking-tight">
                    {t({ en: 'Curriculum Vitae', ar: 'السيرة الذاتية' })}
                  </h3>
                  
                  {/* Luxury Live Pill */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#6853C8] dark:text-[#81C8D4] bg-gradient-to-r from-[#D9D2F3]/50 to-[#BFDDF4]/50 dark:bg-gradient-to-r dark:from-[#9b87c8]/25 dark:to-[#81c8d4]/25 border border-[#D9D2F3] dark:border-white/15 px-3 py-0.5 rounded-full shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6853C8] dark:bg-[#81C8D4] animate-ping" />
                    <Sparkles className="w-3 h-3 text-[#8A79D4] dark:text-[#81C8D4]" />
                    {t({ en: 'Official Record', ar: 'الملف المعتمد' })}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-[#555] dark:text-[hsl(270,15%,92%)] font-medium mt-1 leading-relaxed">
                  {t({
                    en: 'Verified Academic, Research & Biomedical Innovation Record',
                    ar: 'الملف الأكاديمي والبحثي والابتكاري المعتمد لسماح باسودان',
                  })}
                </p>
              </div>
            </div>

            {/* Action Buttons: View & Download with Premium Shimmer */}
            <div className="flex items-center gap-3.5 w-full md:w-auto shrink-0 relative z-10">
              
              {/* Button 1: View CV (Secondary Button: Clean White Background & Deep Plum Text in Light Mode, Frosted Dark in Dark Mode) */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleView}
                className="relative flex-1 md:flex-initial px-5 sm:px-6 py-3.5 rounded-2xl bg-white dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden group/btn"
              >
                {/* Hover Shimmer Line */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent pointer-events-none" />
                
                <Eye className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4] group-hover/btn:scale-110 transition-transform" />
                <span>{t({ en: 'View CV', ar: 'استعراض السيرة' })}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#786B7F] dark:text-white/70 group-hover/btn:text-[#261F2D] dark:group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </motion.button>

              {/* Button 2: Download CV (Primary Button: Soft Lavender-Teal Gradient & White Text) */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="relative flex-1 md:flex-initial px-5 sm:px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden group/dbtn"
              >
                {/* Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/dbtn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {downloading ? (
                  <>
                    <Download className="w-4 h-4 animate-bounce text-white" />
                    <span>{t({ en: 'Preparing PDF...', ar: 'جاري التجهيز...' })}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-white group-hover/dbtn:translate-y-0.5 transition-transform" />
                    <span>{t({ en: 'Download CV', ar: 'تحميل السيرة' })}</span>
                  </>
                )}
              </motion.button>

            </div>

          </div>
        </motion.div>

      </div>

      {/* QUICK PREVIEW MODAL */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-[#F8F7FB] dark:bg-gradient-to-br dark:from-[#1d1336] dark:via-[#16132b] dark:to-[#111a28] rounded-3xl border border-white/80 dark:border-white/15 shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-[#161228]/95 border-b border-black/5 dark:border-white/10 sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#9b87c8]/25 to-[#81c8d4]/30 flex items-center justify-center text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 shadow-2xs">
                    <FileCheck className="w-4 h-4 text-[#915EBD] dark:text-[#81C8D4]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#261F2D] dark:text-white">
                      {t({ en: 'Samah A.Basoodan — CV Preview', ar: 'سماح باسودان — استعراض السيرة الذاتية' })}
                    </h4>
                    <span className="text-xs text-[#786B7F] dark:text-[hsl(270,10%,65%)]">
                      {PORTFOLIO_CONFIG.resume.version}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-xs font-semibold text-[#261F2D] dark:text-white border border-[#D9CFE8]/80 dark:border-white/15 flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{copied ? t({ en: 'Copied', ar: 'تم النسخ' }) : t({ en: 'Share', ar: 'مشاركة' })}</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] text-white hover:opacity-95 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    <span className="hidden sm:inline">{t({ en: 'Download', ar: 'تحميل' })}</span>
                  </button>

                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#786B7F] dark:text-white/80 hover:text-[#261F2D] dark:hover:text-white border border-[#D9CFE8]/80 dark:border-white/15 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-[#261F2D] dark:text-[hsl(270,15%,92%)]">
                
                {/* Profile Card */}
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-black text-xl text-[#261F2D] dark:text-white">
                      {t(PORTFOLIO_CONFIG.name)}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#915EBD] dark:text-[#bda4f2] mt-0.5">
                      {t(PORTFOLIO_CONFIG.title)}
                    </p>
                    <p className="text-xs text-[#786B7F] dark:text-[hsl(270,15%,85%)] mt-2">
                      ✉️ {PORTFOLIO_CONFIG.contact.email} · 📍 {t(PORTFOLIO_CONFIG.contact.location)}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CFEBDD]/60 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    ✓ {t({ en: 'Verified Profile', ar: 'ملف معتمد' })}
                  </span>
                </div>

                {/* PDF Viewer Container */}
                <div className="w-full h-[520px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-inner bg-stone-100 dark:bg-[#0f0b1a]">
                  {pdfUrl ? (
                    <iframe
                      src={pdfUrl}
                      title="Samah Basoodan CV Document"
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-500 dark:text-[hsl(270,10%,65%)] font-medium text-sm">
                      {t({ en: 'PDF preview unavailable', ar: 'عاين ملف PDF عبر زر التنزيل أو الفتح' })}
                    </div>
                  )}
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white dark:bg-[#161228] border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#666] dark:text-[hsl(270,10%,65%)]">
                  {PORTFOLIO_CONFIG.resume.fileName}
                </span>
                <button
                  onClick={handleDownload}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#9b87c8] to-[#81c8d4] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>{t({ en: 'Download PDF', ar: 'تحميل ملف PDF' })}</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
