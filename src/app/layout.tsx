// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Τα Καλύτερα Online Καζίνο για το 2025 στην Ελλάδα | MMystiko',
  description:
    'Συγκρίνετε άδειες, μπόνους καλωσορίσματος, πληρωμές και live τραπέζια με Έλληνες ντίλερ στο mystikopaixnidi.gr',
  metadataBase: new URL('https://mystikopaixnidi.gr'),
  themeColor: '#5f00b8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-brand-dark text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
