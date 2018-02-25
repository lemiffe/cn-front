import React, { PureComponent, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ReactCommonmark from 'react-commonmark';

const fruits = [
  { label: 'Banana', value: '1' },
  { label: 'Apple', value: '2' },
  { label: 'Mango', value: '3' },
  { label: 'Goa', value: '4' },
  { label: 'Grapes', value: '5' },
  { label: 'Pine Apple', value: '6' }
];

export class CreateArticle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Create Article</title>
        </Helmet>
        <Header />
        <main className="o-main">
          <div className="u-breakpoint o-main__container">
            <section className="o-content">
              <div className="o-content__create">
                <form className="t-form">
                  <strong className="u-typography-1">Post a Speculation</strong>
                  <label className="m-form__label">Title</label>
                  <div className="m-form__control">
                    <div className="m-input m-input--s m-input--1">
                      <input type="text" />
                    </div>
                  </div>
                  <label className="m-form__label">Link or Article</label>
                  <div className="m-form__control">
                    <div className="m-input m-input--s m-input--1">
                      <input type="url" />
                    </div>
                  </div>
                  <div className="m-form__control">
                    <div className="m-textarea">
                      <textarea />
                    </div>
                  </div>
                  <div className="m-form__control">
                    <ReactCommonmark
                      source={'# This is a header\n\nAnd this is a paragraph'}
                    />
                  </div>
                  <label className="m-form__label">Currency</label>
                  <p className="m-form__detail">
                    Add the currencies your article is talking about
                  </p>
                  <div className="m-form__control">
                    <Select
                      multi
                      onChange={this.handleSelectChange}
                      value={this.state.value}
                      options={fruits}
                    />
                  </div>
                  <hr className="u-horizontal-separator" />
                  <button className="m-button m-button--m m-button--main">
                    Post a Speculation
                  </button>
                </form>
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
