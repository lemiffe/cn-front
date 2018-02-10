import React from 'react';

export const Footer = () => (
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
          <a className="u-reset-link u-link" href="/">
            Feed ™
          </a>{' '}
          like crazy.{' '}
          <span role="img" aria-label="happy face">
            😁
          </span>{' '}
          <br />
          <br /> We are here to deliver you the best news about{' '}
          <a className="u-reset-link u-link" href="/">
            crypto currency
          </a>{' '}
          through this platform.<br />
          <br /> To learn more about us, check our{' '}
          <a href="/" className="u-reset-link u-link">
            F.A.Q.
          </a>
        </p>
      </section>
      <aside className="o-footer__links">
        <h2 className="u-typography-1">Links</h2>
        <ul className="o-footer__link">
          <li>
            <a className="u-reset-link u-link" href="/">
              F.A.Q.
            </a>
          </li>
          <li>
            <a className="u-reset-link u-link" href="/">
              Add speculation
            </a>
          </li>
          <li>
            <a className="u-reset-link u-link" href="/">
              Press kit
            </a>
          </li>
          <li>
            <a className="u-reset-link u-link" href="/">
              Support us
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </footer>
);
