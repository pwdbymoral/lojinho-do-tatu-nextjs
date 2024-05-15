import { Html, Head, Main, NextScript } from 'next/document';
import { StrictMode } from 'react';

export default function Document() {
  return (
    <StrictMode>
      <Html lang="pt-br">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  );
}
