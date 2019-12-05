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
    <iframe src="http://localhost:3232/index.html#editor" webkitallowfullscreen height="700" width="900" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe>
    
    <div style={{ position: "relative", height:0, paddingBottom:"70%", overflow: "hidden" }}>
      hi
      <iframe style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%" }} src="https://makecode.microbit.org/#pub:_9qwERFL4LLPo" frameBorder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe>
    </div>

    <div style={{position:"relative", height: "calc(300px + 5em)", width:"100%", overflow:"hidden"}}>
      bye
      <iframe style={{position:"absolute",top:"0", left:"0", width:"100%", height:"100%"}} src="https://makecode.microbit.org/---codeembed#pub:_9qwERFL4LLPo" allowfullscreen="allowfullscreen" frameBorder="0" sandbox="allow-scripts allow-same-origin"></iframe>
    </div>

    <div style={{position:"relative", height:0, paddingBottom:"81.97%", overflow:"hidden"}}>
      <iframe style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} src="https://makecode.microbit.org/---run?id=_9qwERFL4LLPo" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe>
    </div>
    <div className="Content">
      {props.children}
    </div>
    <Footer/>
  </div>
);

export default Layout;