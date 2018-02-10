import React, { PureComponent, Fragment } from 'react';
import { Post } from '../../components/Post/Post';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export class PostDetail extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <ul>
                <Post
                  title={
                    "It's time for DEX. Cybex ICO Launches Shortly - 2018 will be the year of the decentralized exchange."
                  }
                  vote={10}
                  url={
                    'https://www.reddit.com/r/Iota/comments/7oqlxc/iota_was_introduced_in_mrs_pengs_speech_in_huawei/'
                  }
                  domain={'r/Iota'}
                  comment={'20'}
                  author={{ name: 'Roy Hollander', title: 'King Of Fighter' }}
                  published_at={'2018-01-07T14:38:31.146847+00:00'}
                />
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
