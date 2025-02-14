import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mega Boutique - Your Ultimate Home Housewares & Kitchen Supply Shop" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.megaboutique.com.au/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
