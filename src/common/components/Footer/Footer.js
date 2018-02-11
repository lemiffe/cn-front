import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link className="u-reset-link u-link" to="/">
            crypto currency
          </Link>{' '}
          through this platform.<br />
          <br /> To learn more about us, check our{' '}
          <Link className="u-reset-link u-link" to="/faq">
            F.A.Q.
          </Link>
        </p>
      </section>
      <aside className="o-footer__links">
        <h2 className="u-typography-1">Links</h2>
        <ul className="o-footer__link">
          <li>
            <Link className="u-reset-link u-link" to="/faq">
              F.A.Q.
            </Link>
          </li>
          <li>
            <Link className="u-reset-link u-link" to="/create">
              New speculation
            </Link>
          </li>
          <li>
            <Link className="u-reset-link u-link" to="/presskit">
              Press kit
            </Link>
          </li>
          <li>
            <Link className="u-reset-link u-link" to="/support">
              Support us
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  </footer>
);
