import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actions as currencyActions } from '../../reducers/entities/currencies';
import {
  actions as currencyListActions,
  getCurrenciesByIds,
  CURRENCIES_SHOWN_STEP
} from '../../reducers/views/currencyList';
import { CurrencyListItem } from '../../components/CurrencyListItem/CurrencyListItem';

class CurrencyList extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrenciesIfNeeded();
  }

  render() {
    const {
      currencies,
      currenciesShown,
      updateCurrencies,
      setCurrenciesShown,
      searchCurrencies
    } = this.props;

    return (
      <aside className="o-sidebar">
        {currencies.filter(currency => currency.isSelected === true).length >
          0 && (
          <div className="o-filters">
            <label className="o-filters__label">Filtered by</label>
            <ul className="o-filters__content">
              {currencies
                .filter(currency => currency.isSelected === true)
                .map(currency => (
                  <button
                    key={currency.id}
                    className="m-button m-button--s m-button--tag"
                    onClick={() =>
                      updateCurrencies([{ id: currency.id, isSelected: false }])
                    }
                  >
                    <span className="m-button__label">{currency.name}</span>
                    <i className="material-icons">clear</i>
                  </button>
                ))}
            </ul>
          </div>
        )}
        <div className="m-bar m-bar--action o-sidebar__filter">
          <div className="m-input m-input--s m-input--1">
            <input
              type="search"
              placeholder="Find your currency..."
              onInput={e => searchCurrencies(e.target.value.toLowerCase())}
            />
            <i className="material-icons m-input__icon">search</i>
          </div>
        </div>
        <ul className="o-sidebar__currencies">
          {currencies
            .slice(0, currenciesShown)
            .map(currency => (
              <CurrencyListItem
                key={currency.id}
                currency={currency}
                onChange={() =>
                  updateCurrencies([
                    { id: currency.id, isSelected: !currency.isSelected }
                  ])
                }
              />
            ))}
        </ul>
        {currenciesShown + CURRENCIES_SHOWN_STEP < currencies.length && (
          <footer className="o-sidebar__footer">
            <button
              className="m-button m-button--m m-button--main"
              onClick={() => {
                setCurrenciesShown(currenciesShown + CURRENCIES_SHOWN_STEP);
              }}
            >
              Show more
            </button>
          </footer>
        )}
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  currencies: getCurrenciesByIds(state),
  ...state.views.currencyList
});

export default connect(mapStateToProps, {
  ...currencyActions,
  ...currencyListActions
})(CurrencyList);
