import React from 'react';
import { distanceInWordsToNow } from 'date-fns';

export const Now = ({ date }) => <span>{distanceInWordsToNow(date)} ago</span>;
