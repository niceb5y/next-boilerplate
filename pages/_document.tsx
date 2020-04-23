import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Base, Container } from '@niceb5y/react-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <Base />
        <body>
          <Container>
            <Main />
          </Container>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
