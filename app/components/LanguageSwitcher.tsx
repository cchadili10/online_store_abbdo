'use client';

import { useLanguage } from '@/app/providers/LanguageProvider';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    language === 'en'
                        ? 'bg-white text-orange-500'
                        : 'text-white hover:bg-orange-600'
                }`}
            >
                English
            </button>
            <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    language === 'ar'
                        ? 'bg-white text-orange-500'
                        : 'text-white hover:bg-orange-600'
                }`}
            >
                العربية
            </button>
        </div>
    );
}
