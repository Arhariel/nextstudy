'use client'
import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './context/ThemeToggleButton';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggleButton from './context/LanguageToggleButton';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-[#f8f8f8] text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <LanguageProvider>
            <nav className="w-full bg-white shadow-md p-4 fixed top-0 flex gap-6 justify-center">
              <Link href="/feed" className="text-lg font-semibold hover:text-blue-600">Лента</Link>
              <Link href="/users" className="text-lg font-semibold hover:text-blue-600">Пользователи</Link>
              <Link href="/form" className="text-lg font-semibold hover:text-blue-600">Форма</Link>
              <ThemeToggleButton />
              <LanguageToggleButton />
            </nav>
            <main className="p-6 pt-16">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
