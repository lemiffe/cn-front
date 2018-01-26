// TODO:
// - Mobile menu
// - Dark / White mode
// - Coins tag
// - Clean CSS typography, look at sizing patterns, vertical white-space patterns
// - CSS grid
// - clean up variables spacing patterns?
import React, { Component, Fragment } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'material-design-icons/iconfont/material-icons.css';
import Currency from './components/currency';
import Money from './components/money';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 10,
      page: 1,
      currencies: props.data.coins || []
    };

    this.handleCurrencyOnChange = this.handleCurrencyOnChange.bind(this);
  }

  handleCurrencyOnChange(isSelected, value) {
    let currencies = this.state.currencies;
    currencies[currencies.indexOf(value)].isSelected = isSelected;

    this.setState({ currencies });
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
                  className="u-reset-link m-button m-button--m m-button--2"
                  href="#"
                >
                  Log in / Register
                </a>
                <a
                  className="u-reset-link m-button m-button--m m-button--3"
                  href="#"
                >
                  New speculation
                </a>
              </span>
            </div>
          </header>
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
                    className="m-button m-button--m m-button--1"
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
                    className="m-button m-button--m m-button--1"
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
                {this.state.currencies.filter(
                  currency => currency.isSelected === true
                ).length > 0 && (
                  <div className="p-home__filters">
                    <label className="p-home__filters__label">
                      Filtered by
                    </label>
                    <ul className="p-home__filters__content">
                      {this.state.currencies
                        .filter(currency => currency.isSelected === true)
                        .map((currency, index) => (
                          <button
                            className="m-button m-button--s m-button--tag"
                            onClick={() =>
                              this.handleCurrencyOnChange(false, currency)
                            }
                          >
                            <span className="m-button__label">{currency.name}</span>
                            <i className="material-icons">clear</i>
                          </button>
                        ))}
                    </ul>
                  </div>
                )}
                <div className="m-bar m-bar--2 p-home__sidebar__filter">
                  <div className="m-input m-input--s m-input--1">
                    <input type="search" placeholder="Find your coin..." />
                    <i className="material-icons m-input__icon">search</i>
                  </div>
                </div>
                <ul className="p-home__sidebar__currencies">
                  {this.state.currencies
                    .slice(0, this.state.size)
                    .map((coin, index) => (
                      <Currency
                        key={index}
                        coin={coin}
                        onChange={event =>
                          this.handleCurrencyOnChange(
                            event.target.checked,
                            coin
                          )
                        }
                      />
                    ))}
                </ul>
                <footer className="p-home__sidebar__footer">
                  <button
                    className="m-button m-button--m m-button--1"
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
