import React from 'react';
import { ButtonVote } from './ButtonVote';
import { CommentForm } from './CommentForm';

export const Comment = () => (
  <div className="o-comment">
    <div className="o-comment__action">
      <ButtonVote vote="57" />
    </div>
    <div className="o-comment__content">
      <div>
        <span className="o-comment__username">Username</span>
        <span className="o-comment__date"> 2h ago</span>
      </div>
      <p className="o-comment__message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        hendrerit, risus vel tristique lacinia, mi felis pretium justo, quis
        pulvinar nunc neque sit amet tortor. Nulla sed convallis quam, sit amet
        tempus dolor. Pellentesque tristique interdum dapibus. Morbi dapibus
        lacus ligula, eu convallis ante aliquet quis. Vivamus sodales orci
        sapien, eu elementum lorem dictum eu. In ac ante maximus lorem tincidunt
        tincidunt. Donec ornare vestibulum malesuada. Sed in porttitor eros,
        quis malesuada ante. Quisque id ipsum ex. Suspendisse rhoncus, ipsum et
        malesuada vestibulum, tellus ex pulvinar quam, vitae ultrices libero
        odio eget lectus. Sed bibendum vitae est porttitor ornare.
      </p>
      <button className="u-reset-button u-link">Reply</button>
      <CommentForm />
    </div>
  </div>
);
