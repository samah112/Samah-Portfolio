import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const TypewriterRoles: React.FC = () => {
  const { language, isRTL } = useLanguage();

  // Roles to cycle through
  const rolesEn = [
    'AI Researcher',
    'Computer Science Student',
    'Biomedical Innovator',
    'Medical System Inventor',
    'Founder of ULTRA Investment',
  ];

  const rolesAr = [
    'باحثة في الذكاء الاصطناعي',
    'طالبة في علوم الحاسب',
    'مبتكرة في الهندسة الطبية الحيوية',
    'مخترعة أنظمة طبية ذكية',
    'مؤسسة منصة ULTRA Investment',
  ];

  const roles = language === 'ar' ? rolesAr : rolesEn;

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  // Reset when language changes
  useEffect(() => {
    setRoleIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(60 + Math.random() * 30); // natural human typing variance

        // Reached end of current role
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200); // pause at full word
        }
      } else {
        // Deleting backward
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(35); // delete faster

        // Fully deleted
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // short pause before typing next role
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <div className="inline-flex items-center gap-2 min-h-[30px] my-1">
      {/* Decorative pearlescent lilac pulse dot */}
      <span className="w-2 h-2 rounded-full bg-[#C9C3EE] shrink-0 shadow-[0_0_8px_#C9C3EE]" />

      <span className="text-sm sm:text-base md:text-lg font-bold text-white">
        {displayText}
      </span>

      {/* Typewriter Cursor */}
      <span
        className="inline-block w-[2px] h-5 bg-white mx-0.5 rounded-full animate-pulse align-middle"
        aria-hidden="true"
      />
    </div>
  );
};
