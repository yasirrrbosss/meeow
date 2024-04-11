import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/context/WalletContext';

const inter = Anton({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'baseMeow',
  description: 'Just a little $meow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WalletProvider>
        <body className={inter.className}>{children}</body>
      </WalletProvider>
    </html>
  );
}
