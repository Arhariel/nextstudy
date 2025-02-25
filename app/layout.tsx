import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <title>Next.js Apple Style</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-[#f8f8f8] text-gray-900">
        <nav className="w-full bg-white shadow-md p-4 fixed top-0 flex gap-6 justify-center">
          <a href="/feed" className="text-lg font-semibold hover:text-blue-600">Лента</a>
          <a href="/users" className="text-lg font-semibold hover:text-blue-600">Пользователи</a>
        </nav>
        <main className="p-6 pt-16">{children}</main>
      </body>
    </html>
  );
}

