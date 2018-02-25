import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions as articleActions } from '../../reducers/entities/articles';
import {
  actions as articleListActions,
  getArticlesByIds
} from '../../reducers/views/articleList';
import { ArticleListItem } from '../../components/ArticleListItem/ArticleListItem';

class ArticleList extends PureComponent {
  componentDidMount() {
    this.props.fetchArticlesIfNeeded();
  }

  render() {
    const { articles, page, setArticlesPage } = this.props;
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
          {articles.map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ul>
        <footer className="o-content__footer">
          <a
            href={`?page=${Math.max(page, 1)}`}
            className="m-button m-button--m m-button--main"
            onClick={() => setArticlesPage(page - 1)}
          >
            Previous
          </a>
          <span />
          <a
            href={`?page=${page + 2}`}
            className="m-button m-button--m m-button--main"
            onClick={() => setArticlesPage(page + 1)}
          >
            Next
          </a>
        </footer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articles: getArticlesByIds(state),
  ...state.views.articleList
});

export default connect(mapStateToProps, {
  ...articleActions,
  ...articleListActions
})(ArticleList);
