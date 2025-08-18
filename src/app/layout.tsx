import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';

export const metadata: Metadata = {
  title: 'Culture Nomad',
  description: 'Your gateway to high-value opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-primary/50 selection:text-primary-foreground">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
