'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/app/providers/LanguageProvider';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}

