import React from 'react';
import numeral from 'numeral';
const MONEY_FORMAT_EUR = '(€ 0.00 a)';

Object.assign(numeral.localeData('en'), {
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T'
  }
});

export default props => (
  <span>€ {numeral(props.value).format(MONEY_FORMAT_EUR)}</span>
);
