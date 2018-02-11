import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="m-bar m-bar--m m-bar--main">
    <div className="m-bar__container u-breakpoint o-header">
      <Link className="u-reset-link o-header__logo" to="/">
        Logo
      </Link>
      <span className="o-header__action">
        <a
          className="u-reset-link m-button m-button--m m-button--beta"
          href="/"
        >
          Log in / Register
        </a>
        <Link
          className="u-reset-link m-button m-button--m m-button--3"
          to="/create"
        >
          New speculation
        </Link>
      </span>
    </div>
  </header>
);
