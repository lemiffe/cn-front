import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CommentForm } from '../../components/CommentForm';
import { ButtonVote } from '../../components/ButtonVote';

const post = {
  id: 2,
  vote: 1,
  comment: 21,
  published_at: '2018-01-07T14:38:29.053339+00:00',
  domain: 'r/IOTAmarkets',
  url:
    'https://www.reddit.com/r/IOTAmarkets/comments/7oqggd/official_iota_foundation_response_to_the_digital/',
  title:
    'Official IOTA Foundation Response to the Digital Currency Initiative at the MIT Media Lab',
  author: {
    name: 'Thibault Nguyen',
    title: 'Time Traveler'
  }
};

export class PostDetail extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <ul>
                <Post {...post} />
                <li className="o-content__comment-form">
                  <CommentForm />
                </li>
              </ul>
              <div className="o-content__comments">
                <ul className="o-comments">
                  <li>
                    <div className="o-comment">
                      <div>
                        <ButtonVote vote="57" />
                      </div>
                      <div>
                        <div>
                          <span>Username</span>
                          <span> - Time ago</span>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum hendrerit, risus vel tristique
                          lacinia, mi felis pretium justo, quis pulvinar nunc
                          neque sit amet tortor. Nulla sed convallis quam, sit
                          amet tempus dolor. Pellentesque tristique interdum
                          dapibus. Morbi dapibus lacus ligula, eu convallis ante
                          aliquet quis. Vivamus sodales orci sapien, eu
                          elementum lorem dictum eu. In ac ante maximus lorem
                          tincidunt tincidunt. Donec ornare vestibulum
                          malesuada. Sed in porttitor eros, quis malesuada ante.
                          Quisque id ipsum ex. Suspendisse rhoncus, ipsum et
                          malesuada vestibulum, tellus ex pulvinar quam, vitae
                          ultrices libero odio eget lectus. Sed bibendum vitae
                          est porttitor ornare.
                        </p>
                        <a href="#" className="u-reset-link u-link">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <CommentForm />
                  </li>
                  <ul className="o-comments">
                    <li>
                      <div className="o-comment">
                        <div>
                          <ButtonVote vote="12" />
                        </div>
                        <div>
                          <div>Username - Time ago - expand or not</div>
                          <p>Comment</p>
                          <a href="#" className="u-reset-link u-link">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <CommentForm />
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <aside className="o-sidebar">
              {/* We will need this... trust me. */}
            </aside>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
