import React, { Fragment } from "react";
import Head from "next/head";
import { MainWrapper } from "./page-styles";

const Page = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{`CXN Fashion - ${title}`}</title>
        <link rel="stylesheet" type="text/css" href="/static/global.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/design_system/typography.css"
        />
        <link rel="stylesheet" href="https://use.typekit.net/mva0eqp.css" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <MainWrapper>{children}</MainWrapper>
    </Fragment>
  );
};

export default Page;
