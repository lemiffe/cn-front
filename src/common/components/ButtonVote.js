import React from 'react';

export const ButtonVote = ({ vote }) => (
  <button className="o-button-vote u-reset-button m-button--4">
    <i className="material-icons">arrow_drop_up</i>
    <span>{vote}</span>
  </button>
);
