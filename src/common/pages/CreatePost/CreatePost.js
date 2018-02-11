import React, { PureComponent, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';

export class CreatePost extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Create Post</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            TODO: CreatePost{' '}
            <span role="img" aria-label="Magic">
              ✨
            </span>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
