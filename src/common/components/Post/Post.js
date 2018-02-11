import React from 'react';
import { Now } from '../Now/Now';
import { Link } from 'react-router-dom';

export const Post = ({
  id,
  vote,
  url,
  title,
  domain,
  comment,
  author,
  published_at
}) => (
  <li className="o-news">
    <article className="o-news__container">
      <button className="o-news__vote u-reset-button m-button--4">
        <i className="material-icons">arrow_drop_up</i>
        <span>{vote}</span>
      </button>
      <div>
        <div>
          <a href={url} className="u-reset-link o-news__title">
            <span>{title}</span>{' '}
            <span className="o-news__source">({domain})</span>
          </a>
        </div>
        <div className="o-news__detail">
          <Link className="u-reset-link u-link" to={`/p/${id}`}>
            {comment} Comment{comment > 1 ? '' : 's'}
          </Link>
          <span className="o-news__separator">•</span>
          <Now date={published_at} />
          <span className="o-news__separator">•</span>
          <Link className="u-reset-link u-link" to={`/u/${author.id}`}>
            {author.name}
          </Link>{' '}
          {author.title}
        </div>
      </div>
    </article>
  </li>
);
