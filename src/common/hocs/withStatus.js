import React from 'react';

export const withStatus = status => WrappedComponent => props => {
  if (props.staticContext) {
    props.staticContext.status = status;
  }

  return <WrappedComponent {...props} />;
};
