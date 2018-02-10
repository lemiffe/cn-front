import React, { PureComponent } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import PostList from '../../containers/PostList/PostList';
import CurrencyList from '../../containers/CurrencyList/CurrencyList';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="theme--sunshine">
        <div className="p-home">
          <Header />
          <main className="o-main">
            <div className="u-breakpoint o-main__container">
              <section className="o-content">
                <PostList />
              </section>
              <CurrencyList />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
