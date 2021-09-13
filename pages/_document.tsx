// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <meta key="0" name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Load your fonts */
        /* <link
          rel="preload"
          href="/fonts/grold/Grold-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
