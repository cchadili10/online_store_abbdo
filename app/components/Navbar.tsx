'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/app/providers/LanguageProvider';

export default function Navbar() {
    const { t } = useLanguage();

    return (
        <nav className="bg-orange-500 text-white h-24 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center h-full items-center">
                <div className="flex w-full justify-between items-center h-16">
                    <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                        <img
                            src="https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/649192649_122098312941137537_4783833097484888801_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=iNRxmN_oiYYQ7kNvwE0NcbP&_nc_oc=Adk2YFqNdzuseX7rp2qMGMXcFhiPMosreBixcB_Lme51BqN839D24iMczp_6lkuns7w&_nc_zt=23&_nc_ht=scontent.frak2-2.fna&_nc_gid=yXhUW1XnxQ6NsjuAClWoIw&_nc_ss=8&oh=00_AfzNdPElebRYOxx42MhLCveMTIbgz0EmAR-OZolxDhj7FQ&oe=69B5392C"
                            alt="ANAQA Store Logo"
                            className="h-20 w-20 rounded-full object-cover"
                        />
                    </Link>
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-6">
                            <Link href="/" className="hover:text-orange-100 transition-colors font-medium">
                                {t('home')}
                            </Link>
                            <Link href="/admin/login" className="hover:text-orange-100 transition-colors font-medium">
                                {t('admin')}
                            </Link>
                        </div>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}
