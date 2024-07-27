import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children}) => {
  return (
    <>
      <Head>
        <title>NextJS Library Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;