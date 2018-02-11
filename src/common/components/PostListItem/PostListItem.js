import React from 'react';
import { Now } from '../Now/Now';
import { Link } from 'react-router-dom';

export const PostListItem = ({ post, ...rest }) => (
  <li className="o-news" {...rest}>
    <article className="o-news__container">
      <button className="o-news__vote u-reset-button m-button--4">
        <i className="material-icons">arrow_drop_up</i>
        <span>{post.vote}</span>
      </button>
      <div>
        <div>
          <a href={post.url} className="u-reset-link o-news__title">
            <span>{post.title}</span>{' '}
            <span className="o-news__source">({post.domain})</span>
          </a>
        </div>
        <div className="o-news__detail">
          <Link className="u-reset-link u-link" to={`/p/${post.id}`}>
            {post.comment} Comment{post.comment > 1 ? '' : 's'}
          </Link>
          <span className="u-dot-separator">•</span>
          <Now date={post.published_at} />
          <span className="u-dot-separator">•</span>
          <Link className="u-reset-link u-link" to={`/u/${post.author.id}`}>
            {post.author.name}
          </Link>{' '}
          {post.author.title}
        </div>
      </div>
    </article>
  </li>
);
