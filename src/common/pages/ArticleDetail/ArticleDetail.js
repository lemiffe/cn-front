import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Comment } from '../../components/Comment';
import { CommentForm } from '../../components/CommentForm';
import {
  actions as articleDetailActions,
  getArticleDetailById
} from '../../reducers/views/articleDetail';
import { actions as articleDetailsActions } from '../../reducers/entities/articleDetails';
import { PageNotFound404 } from '../PageNotFound/PageNotFound';
import { ArticleListItem } from '../../components/ArticleListItem/ArticleListItem';

class ArticleDetail extends PureComponent {
  componentDidMount() {
    const {
      match: { params: { articleId } },
      setArticleId,
      fetchArticleDetailIfNeeded
    } = this.props;
    setArticleId(articleId);
    fetchArticleDetailIfNeeded(articleId);
  }

  componentWillUnmount() {
    this.props.setArticleId(null);
  }
  render() {
    const { article, isLoading } = this.props;

    if (!isLoading && !article) return <PageNotFound404 />;

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
                <ArticleListItem article={article} />
                <li className="o-content__comment-form">
                  <CommentForm />
                </li>
              </ul>
              <div className="o-content__comments">
                <ul className="o-comments">
                  {article.comments.map(comment => (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      reply={e => {
                        console.log('reply', e);
                      }}
                    />
                  ))}
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

const mapStateToProps = state => ({
  article: getArticleDetailById(state),
  ...state.views.articleDetail
});

export default connect(mapStateToProps, {
  ...articleDetailActions,
  ...articleDetailsActions
})(ArticleDetail);
