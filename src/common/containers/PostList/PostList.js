import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions as postActions } from '../../reducers/entities/posts';
import {
  actions as postListActions,
  getPostsByIds
} from '../../reducers/views/postList';
import { PostListItem } from '../../components/PostListItem/PostListItem';

class PostList extends PureComponent {
  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }

  render() {
    const { posts, page, setPostsPage } = this.props;
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
              `Page ${page + 1}`
            )}
          </strong>
        </header>
        <ul className="p-home__list">
          {posts.map(post => <PostListItem key={post.id} post={post} />)}
        </ul>
        <footer className="o-content__footer">
          <a
            href={`?page=${Math.max(page, 1)}`}
            className="m-button m-button--m m-button--main"
            onClick={() => setPostsPage(page - 1)}
          >
            Previous
          </a>
          <span />
          <a
            href={`?page=${page + 2}`}
            className="m-button m-button--m m-button--main"
            onClick={() => setPostsPage(page + 1)}
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

export default connect(mapStateToProps, { ...postActions, ...postListActions })(
  PostList
);
