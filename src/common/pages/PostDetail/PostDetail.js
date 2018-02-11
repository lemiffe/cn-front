import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

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
                <li>
                  <div className="o-comment-form">
                    <div className="m-textarea">
                      <textarea />
                    </div>
                    <button className="m-button m-button--m m-button--main">
                      <span className="m-button__label">Comment</span>
                    </button>
                  </div>
                </li>
              </ul>
              <ul className="o-comments">
                <li>
                  <div>Up</div>
                  <div>
                    <div>Username - Time ago - expand or not</div>
                    <p>Comment</p>
                    <a>Reply</a>
                  </div>
                </li>
                <li>
                  <div>
                    <textarea />
                  </div>
                  <button>Comment</button>
                </li>
                <ul className="o-comments">
                  <li>
                    <div>Up</div>
                    <div>
                      <div>Username - Time ago - expand or not</div>
                      <p>Comment</p>
                      <a>Reply</a>
                    </div>
                  </li>
                  <li>
                    <div>
                      <textarea />
                    </div>
                    <button>Comment</button>
                  </li>
                </ul>
              </ul>
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
