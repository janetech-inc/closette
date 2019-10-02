import React from "react";
import Router from 'next/router';
import { handleCatalogCall } from "../utils/helper_auth";

import Page from "../layouts/page";
import CollectionsWrapper from "../components/collections/collections-wrapper";

class Collections extends React.Component {
  // --- React Lifecycle ---

  componentDidMount() {}

  render() {
    return (
      <Page title={this.props.title}>
        <CollectionsWrapper collections={this.props.collections} />
      </Page>
    );
  }
}

Collections.getInitialProps = async ctx => {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: '/collections/4'
    })
    ctx.res.end()
  } else {
    Router.push('/collections/4')
  }
  return {}
};

Collections.defaultProps = {
  collections: []
};

export default Collections;
