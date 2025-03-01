'use client';
import { useLanguage } from './LanguageContext';

export default function LanguageToggleButton() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'kz' : 'ru');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="p-1 rounded bg-gray-400 text-white dark:bg-gray-900 dark:text-gray-100"
    >
      {language === 'ru' ? '🇷🇺 RU' : '🇰🇿 KZ'}
    </button>
  );
}
