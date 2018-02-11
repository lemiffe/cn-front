import React, { PureComponent, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';

export class PageNotFound extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>404 Not Found</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <h1>404</h1>
            <p>Whoops! couldn't find that one</p>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
