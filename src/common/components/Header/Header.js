import React from 'react';

export const Header = () => (
  <header className="m-bar m-bar--m m-bar--main">
    <div className="m-bar__container u-breakpoint o-header">
      <a href="/" className="u-reset-link o-header__logo">
        Logo
      </a>
      <span className="o-header__action">
        <a
          className="u-reset-link m-button m-button--m m-button--beta"
          href="/"
        >
          Log in / Register
        </a>
        <a className="u-reset-link m-button m-button--m m-button--3" href="/">
          New speculation
        </a>
      </span>
    </div>
  </header>
);
