// TODO:
// - Mobile menu
// - Dark / White mode
// - Color on dark background?
// - Clean CSS typography, look at sizing patterns, vertical white-space patterns
// - CSS grid
// - clean up variables spacing patterns?
import React, { Component, Fragment } from 'react';
import 'cryptocoins-icons/webfont/cryptocoins.css';
import 'material-design-icons/iconfont/material-icons.css';
import Currency from './components/currency';
import Post from './components/post';

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
      <Fragment>
        <header className="m-bar m-bar--m m-bar--main">
          <div className="m-bar__container u-breakpoint o-header">
            <a href="#" className="u-reset-link o-header__logo">
              logo
            </a>
            <span className="o-header__action">
              <a
                className="u-reset-link m-button m-button--m m-button--beta"
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
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <header className="o-main__header">
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
                  <Post
                    key={index}
                    title={news.title}
                    vote={news.vote}
                    url={news.url}
                    domain={news.domain}
                    comment={news.comment}
                    author={news.author}
                    published_at={news.published_at}
                  />
                ))}
              </ul>
              <footer className="o-content__footer">
                <a
                  href="#"
                  className="m-button m-button--m m-button--alpha"
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
                  className="m-button m-button--m m-button--alpha"
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
            <aside className="o-sidebar">
              {this.state.currencies.filter(
                currency => currency.isSelected === true
              ).length > 0 && (
                <div className="o-filters">
                  <label className="o-filters__label">Filtered by</label>
                  <ul className="o-filters__content">
                    {this.state.currencies
                      .filter(currency => currency.isSelected === true)
                      .map((currency, index) => (
                        <button
                          className="m-button m-button--s m-button--tag"
                          onClick={() =>
                            this.handleCurrencyOnChange(false, currency)
                          }
                        >
                          <span className="m-button__label">
                            {currency.name}
                          </span>
                          <i className="material-icons">clear</i>
                        </button>
                      ))}
                  </ul>
                </div>
              )}
              <div className="m-bar m-bar--action o-sidebar__filter">
                <div className="m-input m-input--s m-input--1">
                  <input type="search" placeholder="Find your coin..." />
                  <i className="material-icons m-input__icon">search</i>
                </div>
              </div>
              <ul className="o-sidebar__currencies">
                {this.state.currencies
                  .slice(0, this.state.size)
                  .map((coin, index) => (
                    <Currency
                      key={index}
                      coin={coin}
                      onChange={event =>
                        this.handleCurrencyOnChange(event.target.checked, coin)
                      }
                    />
                  ))}
              </ul>
              <footer className="o-sidebar__footer">
                <button
                  className="m-button m-button--m m-button--alpha"
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
        <footer className="o-footer">
          <div className="u-breakpoint o-footer__container">
            <section className="o-footer__about">
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
            <aside className="o-footer__links">
              <h2 className="u-typography-1">Links</h2>
              <ul className="o-footer__link">
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
      </Fragment>
    );
  }
}

export default App;
