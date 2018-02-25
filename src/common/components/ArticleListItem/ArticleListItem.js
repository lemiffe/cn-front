import React from 'react';
import { Now } from '../Now/Now';
import { ButtonVote } from '../ButtonVote';
import { Link } from 'react-router-dom';

const getTitleForType = ({ id, type, link, title }) => {
  switch (type) {
    case 'link':
      return (
        <a href={link} className="u-reset-link o-news__title">
          <span>{title}</span>{' '}
          <span className="o-news__source">({link.hostname})</span>
        </a>
      );
    case 'text':
    default:
      return (
        <Link to={`/p/${id}`} className="u-reset-link o-news__title">
          <span>{title}</span>
        </Link>
      );
  }
};

export const ArticleListItem = ({ article, ...rest }) => (
  <li className="o-news" {...rest}>
    <article className="o-news__container">
      <ButtonVote
        vote={article.score}
        upvoted={article.upvoted}
        downvoted={article.downvoted}
      />
      <div>
        <div>{getTitleForType(article)}</div>
        <div className="o-news__detail">
          <Link className="u-reset-link u-link" to={`/p/${article.id}`}>
            {article.comments} comment{article.comments === 1 ? '' : 's'}
          </Link>
          <span className="u-dot-separator">•</span>
          <Now date={article.createdAt} />
          <span className="u-dot-separator">•</span>
          <Link className="u-reset-link u-link" to={`/u/${article.user.id}`}>
            {article.user.name}
          </Link>{' '}
          {article.user.title}
        </div>
      </div>
    </article>
  </li>
);
