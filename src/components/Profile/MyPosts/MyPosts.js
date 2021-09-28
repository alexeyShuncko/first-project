import React from 'react';
import { Field, Form } from 'react-final-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';


class MyPosts extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
      return nextProps !== this.props || nextState !== this.state
    }

  render() {
    let postsElements = this.props.posts.map(posts => <Post key={posts.id} message={posts.message} like={posts.like} />)


    const onSubmit = (values) => {
      this.props.addPost(values.Post)
    }


    return (
      <div className={s.myPosts}>

        <h3>My posts</h3>
        <div>

          <Form
            onSubmit={onSubmit}

            // validate={(values) => {
            //   const errors = {};
            //   if (!values.Post) {
            //     errors.Post = "Required";
            //   }

            //   return errors;
            // }}

            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} className={s.form}>

                <div>
                  <label></label>
                  <Field
                    name="Post"
                    placeholder="Введте текст"
                    component="textarea"
                    type="text"
                  />
                </div>

                <div className={s.buttons}>

                  <button
                    type="submit"
                    disabled={submitting || pristine}

                  >
                    Добавить
                  </button>

                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}

                  >
                    Очистить
                  </button>

                </div>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}

              </form>
            )}
          />


        </div>
        <div className={s.posts}>
          {postsElements}
        </div>

      </div>

    )
  }
}

export default MyPosts;