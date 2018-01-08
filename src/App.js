import React, { Component } from 'react';
// http://numeraljs.com/
import numeral from 'numeral';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'material-design-icons/iconfont/material-icons.css';

Object.assign(numeral.localeData('en'), {
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T'
  }
});

export const MONEY_FORMAT_EUR = '(€ 0.00 a)';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 10 };
  }

  render() {
    return (
      <div className="t-home">
        <header className="m-bar m-bar--m m-bar--1">
          <div className="m-bar__container u-breakpoint t-home__header">
            <a href="#" className="u-reset-link t-home__header-logo">
              logo
            </a>
            <span className="t-home__header-action">
              <a className="u-reset-link m-button m-button--s m-button--2" href="#">
                Log in / Register
              </a>
              <a
                className="u-reset-link m-button m-button--s m-button--3"
                href="#"
              >
                New speculation
              </a>
            </span>
          </div>
        </header>
        <div className="t-home__navigation">
          <div className="m-bar m-bar--m m-bar--2">
            <div className="u-breakpoint m-bar__container t-home__navigation__container">
              <nav className="m-navigation m-navigation--1">
                <a
                  className="u-reset-link m-navigation__item is-active"
                  href="#"
                >
                  <span>All</span>
                </a>
                <a className="u-reset-link m-navigation__item" href="#">
                  <span>Trending</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <main className="t-home__main">
          <div className="u-breakpoint t-home__main__container">
            <section className="t-home__content">
              <ul className="t-home__list">
                {this.props.data.news.map(news => (
                  <li className="o-news">
                    <article className="o-news__container">
                      <button className="o-news__vote u-reset-button m-button--4">
                        <i className="material-icons">arrow_drop_up</i>
                        <span>{news.vote}</span>
                      </button>
                      <div>
                        <div>
                          <a
                            href={news.url}
                            className="u-reset-link o-news__title"
                          >
                            <span>{news.title}</span>{' '}
                            <span className="o-news__source">
                              ({news.domain})
                            </span>
                          </a>
                        </div>
                        <div className="o-news__detail">
                          <a className="u-reset-link u-link" href="#">
                          {news.comment} Comment{news.comment > 1 ? '': 's'}
                          </a>{' '}
                          - {distanceInWordsToNow(new Date(news.published_at))} ago,{' '}
                          <a className="u-reset-link u-link" href="#">
                            {news.author.name}
                          </a>, {news.author.title}
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
              <footer className="t-home__content__footer">
                <a href="#" className="m-button m-button--s m-button--1">
                  Previous
                </a>
                <span className="t-home__content__footer__label">
                  <strong>Page 1</strong>
                </span>
                <a href="#" className="m-button m-button--s m-button--1">
                  Next
                </a>
              </footer>
            </section>
            <aside className="t-home__sidebar">
              <header className="t-home__sidebar__header">
                <h2 className="u-typography-1">Currencies</h2>
                <p className="u-typography-2 t-home__sidebar__description">
                  Click on the currencies below to filter the news:
                </p>
              </header>
              <div className="m-bar m-bar--s m-bar--2 t-home__sidebar__filter">
                <nav className="m-navigation m-navigation--1">
                  <button className="u-reset-button m-navigation__item is-active">
                    All
                  </button>
                  <button className="u-reset-button m-navigation__item">
                    Trending
                  </button>
                  <button className="u-reset-button m-navigation__item">
                    Top 100
                  </button>
                </nav>
              </div>
              <ul className="t-home__sidebar__currencies">
                {this.props.data.coins.slice(0, this.state.size).map(coin => (
                  <li className="o-currency">
                    <header className="o-currency__header">
                      <strong className="u-ellipsis o-currency__name">
                        <i className={`cc ${coin.symbol}`} />{' '}
                        <span>{coin.name}</span>
                      </strong>
                      <span
                        className={`o-currency__variation ${
                          coin.percent_change_1h.charAt(0) === '-'
                            ? 'is-down'
                            : 'is-up'
                        }`}
                      >
                        <span>{coin.percent_change_1h}%</span>
                        {coin.percent_change_1h.charAt(0) === '-' ? (
                          <i className="material-icons">arrow_drop_down</i>
                        ) : (
                          <i className="material-icons">arrow_drop_up</i>
                        )}
                      </span>
                    </header>
                    <footer className="o-currency__figures">
                      <div className="o-currency__market-cap">
                        <div className="u-typography-3">Market Cap</div>
                        <div className="u-typography-4 u-ellipsis">
                          €{' '}
                          {numeral(coin.market_cap_eur).format(
                            MONEY_FORMAT_EUR
                          )}
                        </div>
                      </div>
                      <div className="o-currency__volume">
                        <div className="u-typography-3">Volume (24h)</div>
                        <div className="u-typography-4 u-ellipsis">
                          €{' '}
                          {numeral(coin['24h_volume_eur']).format(
                            MONEY_FORMAT_EUR
                          )}
                        </div>
                      </div>
                      <div className="o-currency__value">
                        <div className="u-typography-3">Price</div>
                        <div className="u-typography-4 u-ellipsis">
                          € {numeral(coin.price_eur).format(MONEY_FORMAT_EUR)}
                        </div>
                      </div>
                    </footer>
                  </li>
                ))}
              </ul>
              <footer className="t-home__sidebar__footer">
                <button
                  className="m-button m-button--s m-button--1"
                  onClick={() => {
                    this.setState({ size: (this.state.size += 10) });
                  }}
                >
                  Show more
                </button>
              </footer>
            </aside>
          </div>
        </main>
        <footer className="t-home__footer">
          <div className="u-breakpoint t-home__footer__container">
            <section className="t-home__footer__about">
              <h2 className="u-typography-1">About us</h2>
              <p className="u-typography-2">
                We are a 🇲🇽 mexican guy that you may have cross in a game of
                CS:GO, a 🇧🇪 belgian dude planting 🥑 avocado tree and a 🇫🇷
                french guy that{' '}
                <a className="u-reset-link u-link" href="#">
                  Feed ™
                </a>{' '}
                like crazy. 😁 <br />
                <br /> We are here to deliver you the best news about{' '}
                <a className="u-reset-link u-link" href="#">
                  crypto currency
                </a>{' '}
                through this platform.<br />
                <br /> To learn more about us, check our{' '}
                <a href="#" className="u-reset-link u-link">
                  F.A.Q.
                </a>
              </p>
            </section>
            <aside className="t-home__footer__links">
              <h2 className="u-typography-1">Links</h2>
              <ul className="t-home__footer__link">
                <li>
                  <a className="u-reset-link u-link" href="#">
                    F.A.Q.
                  </a>
                </li>
                <li>
                  <a className="u-reset-link u-link" href="#">
                    Add speculation
                  </a>
                </li>
                <li>
                  <a className="u-reset-link u-link" href="#">
                    Press kit
                  </a>
                </li>
                <li>
                  <a className="u-reset-link u-link" href="#">
                    Support us
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
