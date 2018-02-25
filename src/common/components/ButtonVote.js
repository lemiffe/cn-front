import React from 'react';

export const ButtonVote = ({ vote, upvoted, downvoted }) => (
  <button className="o-button-vote u-reset-button m-button--4">
    {upvoted && <i className="material-icons">arrow_drop_up</i>}
    <span>{vote}</span>
    {downvoted && <i className="material-icons">arrow_drop_down</i>}
  </button>
);
