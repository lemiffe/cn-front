import React, { PureComponent, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';

export class CreatePost extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Create Post</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <div className="o-content__create">
                <form class="m-form">
                  <label class="m-form__label">Type</label>
                  <p class="m-form__detail">
                    You can post a link or some text...
                  </p>
                  <div>
                    <label className="m-radio">
                      <input type="radio" checked />
                      <div className="m-radio__indicator" />
                      <div className="m-radio__label">Link</div>
                    </label>
                    <label className="m-radio">
                      <input type="radio" />
                      <div className="m-radio__indicator" />
                      <div className="m-radio__label">Text</div>
                    </label>
                  </div>
                  <label class="m-form__label">Link</label>
                  <p class="m-form__detail">Link only bitches...</p>
                  <div className="m-input m-input--s m-input--1">
                    <input type="url" />
                  </div>
                  {/* <label class="m-form__label">Text</label>
                  <p class="m-form__detail">Put some text on here please...</p>
                  <div className="m-textarea">
                    <textarea />
                  </div> */}
                  <label class="m-form__label">Currency</label>
                  <p class="m-form__detail">
                    Select the currency your news is talking about...
                  </p>
                  <div>Select currency...</div>
                  <button className="m-button m-button--m m-button--main">
                    Add a new speculation
                  </button>
                </form>
              </div>
              {/* We will need this... trust me. */}
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
