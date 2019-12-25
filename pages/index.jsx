import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import withLoggedIn from '~/components/global/auth/withLoggedIn';
import homeAPI from '~/redux/api/home';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Introduction from '~/components/home/introduction';
import Timeline from '~/components/home/timeline';
import Prize from '~/components/home/prize';

class HomePage extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch(homeAPI());
    const content = await res.json();
    return { content };
  }

  render() {
    const { content } = this.props;
    const { intro, timeline, prizes } = content;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Navbar transparent />
        <Header />
        <Sponsers />
        <Introduction header={intro.header_fa} content={intro.text_fa} />
        <Timeline timeline={timeline} />
        <Prize prizes={prizes} />
        <Footer />
      </>
    );
  }
}

export default withLoggedIn(HomePage);
