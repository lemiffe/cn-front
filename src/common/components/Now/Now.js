import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export const Now = ({ date }) => (
  <span>{distanceInWordsToNow(new Date(date))} ago</span>
);
