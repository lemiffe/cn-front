import React from 'react';
import { Now } from '../Now/Now';
import { ButtonVote } from '../ButtonVote';
import { Link } from 'react-router-dom';

export const ArticleListItem = ({ article, ...rest }) => (
  <li className="o-news" {...rest}>
    <article className="o-news__container">
      <ButtonVote vote={article.vote} />
      <div>
        <div>
          <a href={article.url} className="u-reset-link o-news__title">
            <span>{article.title}</span>{' '}
            <span className="o-news__source">({article.domain})</span>
          </a>
        </div>
        <div className="o-news__detail">
          <Link className="u-reset-link u-link" to={`/p/${article.id}`}>
            {article.comment} Comment{article.comment > 1 ? '' : 's'}
          </Link>
          <span className="u-dot-separator">•</span>
          <Now date={article.published_at} />
          <span className="u-dot-separator">•</span>
          <Link className="u-reset-link u-link" to={`/u/${article.author.id}`}>
            {article.author.name}
          </Link>{' '}
          {article.author.title}
        </div>
      </div>
    </article>
  </li>
);
