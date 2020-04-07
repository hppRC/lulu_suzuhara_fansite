import Document, { Head, Html, Main, NextScript } from 'next/document';

const ogpImageSrc = require(`assets/Desktop.png`);

interface CustomDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class CustomDocument extends Document implements CustomDocumentInterface {
  url = `https://lulu-suzuhara-fansite.netlify.com/`;

  title = `Lulu Suzuhara Fansite`;

  description = `Lulu Suzuhara Fansite`;

  render(): JSX.Element {
    return (
      <Html lang='ja-JP'>
        <Head>
          <meta name='charset' content='UTF-8' />
          <meta name='description' content={this.description} />
          <meta name='theme-color' content='#09090f' />
          {/* <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' key='viewport' /> */}

          <meta property='og:type' content='website' />
          <meta property='og:title' content={this.title} />
          <meta property='og:url' content={this.url} />
          <meta property='og:description' content={this.description} />
          <meta property='og:site_name' content={this.title} />
          <meta property='og:image' content={ogpImageSrc} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={this.title} />
          <meta name='twitter:description' content={this.description} />
          <meta name='twitter:image' content={ogpImageSrc} />

          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
