import React from 'react';
import { Money } from '../Money/Money';

export const CurrencyListItem = ({ coin, onChange }) => (
  <li className="o-currency">
    <label className="o-currency__control">
      <input type="checkbox" onChange={onChange} checked={coin.isSelected} />
      <div className="o-currency__container">
        <header className="o-currency__header">
          <strong className="u-ellipsis o-currency__name">
            <span>{coin.name}</span> <i className={`cc ${coin.symbol}`} />
          </strong>
          <span
            className={`o-currency__variation ${
              coin.percent_change_1h.charAt(0) === '-' ? 'is-down' : 'is-up'
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
              <Money value={coin.market_cap_eur} />
            </div>
          </div>
          <div className="o-currency__volume">
            <div className="u-typography-3">Volume (24h)</div>
            <div className="u-typography-4 u-ellipsis">
              <Money value={coin['24h_volume_eur']} />
            </div>
          </div>
          <div className="o-currency__value">
            <div className="u-typography-3">Price</div>
            <div className="u-typography-4 u-ellipsis">
              <Money value={coin.price_eur} />
            </div>
          </div>
        </footer>
      </div>
    </label>
  </li>
);
