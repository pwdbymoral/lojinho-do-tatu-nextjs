import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Html, Head, Main, NextScript } from 'next/document';
import { StrictMode } from 'react';

export default function Document() {
  return (
    <StrictMode>
      <Html lang="pt-br">
        <Head />
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  );
}
