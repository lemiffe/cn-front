import React from 'react';
import { ButtonVote } from './ButtonVote';
import { CommentForm } from './CommentForm';
import { Now } from './Now/Now';

export const Comment = ({ comment, reply }) => (
  <li>
    <div className="o-comment">
      <div className="o-comment__action">
        <ButtonVote
          vote={comment.score}
          upvoted={comment.upvoted}
          downvoted={comment.downvoted}
        />
      </div>
      <div className="o-comment__content">
        <div>
          {comment.user && (
            <span className="o-comment__username">
              {comment.user.name} ({comment.user.title})
            </span>
          )}
          <span className="o-comment__date">
            <Now date={comment.createdAt} />
          </span>
        </div>
        <p className="o-comment__message">{comment.message}</p>
        <button className="u-reset-button u-link" onClick={reply}>
          Reply
        </button>
        <CommentForm />
      </div>
    </div>
    {comment.children &&
      comment.children.length > 0 && (
        <ul className="o-comments">
          {comment.children.map(comment => (
            <Comment key={comment.id} comment={comment} reply={reply} />
          ))}
        </ul>
      )}
  </li>
);
