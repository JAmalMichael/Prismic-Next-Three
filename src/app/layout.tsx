import localFont from 'next/font/local'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import './app.css'
import Header from '@/components/Header';
import ViewCanvas from '@/components/ViewCanvas';
import Footer from '@/components/Footer';

const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  weight: '100 900',
  variable: '--font-alpino',
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className='overflow-x-hidden bg-yellow-400'>
        <Header />
        <main>
        {children}
        <ViewCanvas />
        </main>
        <Footer />
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
