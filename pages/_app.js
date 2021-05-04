import '../styles/globals.css'
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';

const myApp = function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(myApp);
