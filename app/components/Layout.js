import "./Layout.scss";
import "./global-styles/index.scss";
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>Closette</title>
    </Head>
    <Navbar checkout={props.checkout} />
    <div className="Content">
      {props.children}
    </div>
    <Footer/>
  </div>
);

export default Layout;