import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Article } from '../../components/Article/Article';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Comment } from '../../components/Comment';
import { CommentForm } from '../../components/CommentForm';

const article = {
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

export class ArticleDetail extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{article.title}</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <ul>
                <Article {...article} />
                <li className="o-content__comment-form">
                  <CommentForm />
                </li>
              </ul>
              <div className="o-content__comments">
                <ul className="o-comments">
                  <li>
                    <Comment />
                  </li>
                  <li>
                    <ul className="o-comments">
                      <li>
                        <Comment />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Comment />
                  </li>
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
