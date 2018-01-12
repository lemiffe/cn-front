// TODO:
// - Mobile menu
// - Dark / White mode
// - Coins tag
// - CSS grid
// - clean up variables spacing patterns?
import React, { Component } from 'react';
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
    this.state = {
      size: 10,
      page: 1,
      selectedCurrencies: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, value) {
    event.target.checked === true
      ? this.setState(prevState => ({
          selectedCurrencies: [...prevState.selectedCurrencies, value]
        }))
      : this.setState(prevState => {
          const array = this.state.selectedCurrencies;
          const index = array.indexOf(value);
          array.splice(index, 1);
          return { selectedCurrencies: array };
        });
  }

  render() {
    return (
      <div className="theme--sunshine">
        <div className="p-home">
          <header className="m-bar m-bar--m m-bar--1">
            <div className="m-bar__container u-breakpoint p-home__header">
              <a href="#" className="u-reset-link p-home__header-logo">
                logo
              </a>
              <span className="p-home__header-action">
                <a
                  className="u-reset-link m-button m-button--s m-button--2"
                  href="#"
                >
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
          {this.state.selectedCurrencies.map(c => <span>{c.name}</span>)}
          <main className="p-home__main">
            <div className="u-breakpoint p-home__main__container">
              <section className="p-home__content">
                <header className="p-main__header">
                  <strong className="u-typography-1">
                    {this.state.page === 1 ? (
                      <span>
                        <span role="img" aria-label="fire">
                          🔥
                        </span>{' '}
                        Welcome and enjoy{' '}
                        <span role="img" aria-label="avocado">
                          🥑
                        </span>{' '}
                        <span role="img" aria-label="happy face">
                          😁
                        </span>{' '}
                        <span role="img" aria-label="fire">
                          🔥
                        </span>
                      </span>
                    ) : (
                      `Page ${this.state.page}`
                    )}
                  </strong>
                </header>
                <ul className="p-home__list">
                  {this.props.data.news.map((news, index) => (
                    <li key={index} className="o-news">
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
                              {news.comment} Comment{news.comment > 1
                                ? ''
                                : 's'}
                            </a>
                            <span className="u-dot-separator">•</span>
                            <span>
                              {distanceInWordsToNow(
                                new Date(news.published_at)
                              )}{' '}
                              ago
                            </span>
                            <span className="u-dot-separator">•</span>
                            <a className="u-reset-link u-link" href="#">
                              {news.author.name}
                            </a>{' '}
                            {news.author.title}
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
                <footer className="p-home__content__footer">
                  <a
                    href="#"
                    className="m-button m-button--s m-button--1"
                    onClick={() => {
                      this.state.page - 1 >= 1
                        ? this.setState(prevState => {
                            return {
                              page: prevState.page - 1
                            };
                          })
                        : null;
                    }}
                  >
                    Previous
                  </a>
                  <span />
                  <a
                    href="#"
                    className="m-button m-button--s m-button--1"
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          page: prevState.page + 1
                        };
                      });
                    }}
                  >
                    Next
                  </a>
                </footer>
              </section>
              <aside className="p-home__sidebar">
                <div className="m-bar m-bar--2 p-home__sidebar__filter">
                  <div className="m-input m-input--s m-input--1">
                    <input type="search" placeholder="Find your coin..." />
                    <i className="material-icons m-input__icon">search</i>
                  </div>
                </div>
                <ul className="p-home__sidebar__currencies">
                  {this.props.data.coins
                    .slice(0, this.state.size)
                    .map((coin, index) => (
                      <li key={index} className="o-currency">
                        <label className="o-currency__control">
                          <input
                            type="checkbox"
                            onChange={e =>
                              this.handleInputChange(e, {
                                name: coin.name,
                                symbol: coin.symbol
                              })
                            }
                          />
                          <div className="o-currency__container">
                            <header className="o-currency__header">
                              <strong className="u-ellipsis o-currency__name">
                                <span>{coin.name}</span>{' '}
                                <i className={`cc ${coin.symbol}`} />
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
                                  <i className="material-icons">
                                    arrow_drop_down
                                  </i>
                                ) : (
                                  <i className="material-icons">
                                    arrow_drop_up
                                  </i>
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
                                <div className="u-typography-3">
                                  Volume (24h)
                                </div>
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
                                  €{' '}
                                  {numeral(coin.price_eur).format(
                                    MONEY_FORMAT_EUR
                                  )}
                                </div>
                              </div>
                            </footer>
                          </div>
                        </label>
                      </li>
                    ))}
                </ul>
                <footer className="p-home__sidebar__footer">
                  <button
                    className="m-button m-button--s m-button--1"
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          size: prevState.size + 10
                        };
                      });
                    }}
                  >
                    Show more
                  </button>
                </footer>
              </aside>
            </div>
          </main>
          <footer className="p-home__footer">
            <div className="u-breakpoint p-home__footer__container">
              <section className="p-home__footer__about">
                <h2 className="u-typography-1">About us</h2>
                <p className="u-typography-2">
                  We are a{' '}
                  <span role="img" aria-label="mexican flag">
                    🇲🇽
                  </span>{' '}
                  mexican guy that you may have cross in a game of CS:GO, a{' '}
                  <span role="img" aria-label="belgium flag">
                    🇧🇪
                  </span>{' '}
                  belgian dude planting{' '}
                  <span role="img" aria-label="avocado">
                    🥑
                  </span>{' '}
                  avocado tree and a{' '}
                  <span role="img" aria-label="french flag">
                    🇫🇷
                  </span>{' '}
                  french guy that{' '}
                  <a className="u-reset-link u-link" href="#">
                    Feed ™
                  </a>{' '}
                  like crazy.{' '}
                  <span role="img" aria-label="happy face">
                    😁
                  </span>{' '}
                  <br />
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
              <aside className="p-home__footer__links">
                <h2 className="u-typography-1">Links</h2>
                <ul className="p-home__footer__link">
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
      </div>
    );
  }
}

export default App;
