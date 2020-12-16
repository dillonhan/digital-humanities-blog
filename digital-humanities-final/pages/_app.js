import '../styles/globals.css'

const Noop = ({children}) => children;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;
  return (
  <Layout>
  <Component {...pageProps} />
  <style jsx global>{`
  `}</style>
  </Layout>
  );
}

export default MyApp
