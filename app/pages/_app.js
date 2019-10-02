import App, { Container } from "next/app";
import Router from 'next/router';
import { ThemeProvider } from "styled-components";
import Nav from "../layouts/nav";
import { StateProvider } from "../reducers/state_provider";
import { globalReducer } from "../reducers/global_reducer";
import theme from "../components/global-styles/theme";
import LoadingOverlay from "../layouts/loading-overlay";

import '../static/global.css';
import { Analytics } from "../utils/ga_analytics";

class BuyerXP extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {
      user: {}
    }
    if (Component.getInitialProps) {
      pageProps = {
        ...pageProps,
        ...await Component.getInitialProps(ctx)
      }
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user;
    }
    return { pageProps };
  };

  constructor(props) {
    super(props);
    this.state = {
      user: props.pageProps.user,
      loading: false,
    };
  };

  componentDidMount() {
    let analytics = Analytics.getInstance();
  
    if (this.props && this.props.pageProps && this.props.pageProps.user) {
      analytics.set({userId: this.props.pageProps.user.user_id});
    }

    Router.router.events.on('routeChangeStart', () => this.setState({ loading: true }));
    Router.router.events.on('routeChangeComplete', () => {
      analytics.gaTrackPageView()
      this.setState({ loading: false })
    });
  }

  render() {
    console.log(this.state.loading)
    const getCartFromLocalStorage = () => {
      if (typeof window !== "undefined" && localStorage.cart) {
        return JSON.parse(localStorage.cart);
      } else {
        return [];
      }
    };

    const initialState = {
      cart: getCartFromLocalStorage(),
      user: this.state.user,
      checkoutProducts: {},
      cartTotals: {
        orderSubtotal: 0,
        estTax: 0,
        estShipping: 0,
      }
    };
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <StateProvider initialState={initialState} reducer={globalReducer}>            
          <LoadingOverlay isLoading={this.state.loading}/>
            <header>
              <Nav
                router={router}
                theme={pageProps.theme}
                name={pageProps.title}
                showLogo={pageProps.showLogo}
                showRack={pageProps.showRack}
              />
            </header>
            <Component {...pageProps} />
          </StateProvider>
        </Container>
      </ThemeProvider>
    );
  }
}

export default BuyerXP;
