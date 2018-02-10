import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';
import { actions } from '../../reducers/entities/posts';
import { getPostsByIds } from '../../reducers/views/postList';

class PostList extends PureComponent {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }

  render() {
    const { posts, page } = this.props;
    return (
      <Fragment>
        <header className="o-main__header">
          <strong className="u-typography-1">
            {page === 0 ? (
              <span>
                <span role="img" aria-label="fire">
                  🔥
                </span>{' '}
                Welcome and enjoy{' '}
                <span role="img" aria-label="avocado">
                  🥑
                </span>{' '}
                <span role="img" aria-label="happy face">
                  😁
                </span>{' '}
                <span role="img" aria-label="fire">
                  🔥
                </span>
              </span>
            ) : (
              `Page ${page}`
            )}
          </strong>
        </header>
        <ul className="p-home__list">
          {posts.map((post, index) => (
            <li key={index} className="o-news">
              <article className="o-news__container">
                <button className="o-news__vote u-reset-button m-button--4">
                  <i className="material-icons">arrow_drop_up</i>
                  <span>{post.vote}</span>
                </button>
                <div>
                  <div>
                    <a href={post.url} className="u-reset-link o-news__title">
                      <span>{post.title}</span>{' '}
                      <span className="o-news__source">({post.domain})</span>
                    </a>
                  </div>
                  <div className="o-news__detail">
                    <a className="u-reset-link u-link" href="/">
                      {post.comment} Comment{post.comment > 1 ? '' : 's'}
                    </a>
                    <span className="u-dot-separator">•</span>
                    <span>
                      {distanceInWordsToNow(new Date(post.published_at))} ago
                    </span>
                    <span className="u-dot-separator">•</span>
                    <a className="u-reset-link u-link" href="/">
                      {post.author.name}
                    </a>{' '}
                    {post.author.title}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <footer className="o-content__footer">
          <a
            href="/"
            className="m-button m-button--m m-button--main"
            onClick={() => {
              this.state.page - 1 > 0 &&
                this.setState(prevState => {
                  return {
                    page: prevState.page - 1
                  };
                });
            }}
          >
            Previous
          </a>
          <span />
          <a
            href="/"
            className="m-button m-button--m m-button--main"
            onClick={() => {
              this.setState(prevState => {
                return {
                  page: prevState.page + 1
                };
              });
            }}
          >
            Next
          </a>
        </footer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPostsByIds(state),
  ...state.views.postList
});

export default connect(mapStateToProps, actions)(PostList);
