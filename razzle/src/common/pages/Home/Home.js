import React, { PureComponent } from 'react';
import { Coin } from '../../components/Coin/Coin';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import PostList from '../../containers/PostList/PostList';

export class Home extends PureComponent {
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
          <Header />
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
                <PostList />
                <footer className="o-content__footer">
                  <a
                    href="/"
                    className="m-button m-button--m m-button--1"
                    onClick={() => {
                      this.state.page - 1 > 0 &&
                        this.setState(prevState => {
                          return {
                            page: prevState.page - 1
                          };
                        });
                    }}
                  >
                    Previous
                  </a>
                  <span />
                  <a
                    href="/"
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
                <div className="m-bar m-bar--2 o-sidebar__filter">
                  <div className="m-input m-input--s m-input--1">
                    <input type="search" placeholder="Find your coin..." />
                    <i className="material-icons m-input__icon">search</i>
                  </div>
                </div>
                <ul className="o-sidebar__currencies">
                  {this.state.currencies
                    .slice(0, this.state.size)
                    .map((coin, index) => (
                      <Coin
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
                <footer className="o-sidebar__footer">
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
          <Footer />
        </div>
      </div>
    );
  }
}
