import type { Metadata } from 'next';
import { Geist, Geist_Mono, Manrope } from 'next/font/google';

// Нормалізація стилів
import 'modern-normalize';
import './globals.css';
import Header from '@/components/Header/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const monropeSans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RentalCar app',
  description:
    'Шукаєте авто на прокат? RentalCar пропонує автомобілі будь-якого класу за найкращими цінами. Підтримка 24/7, повне страхування та швидке бронювання.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${monropeSans.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
