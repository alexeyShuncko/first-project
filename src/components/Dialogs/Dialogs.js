import React from 'react';
import { Field, Form } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {


  let dialogsElements = props.messagesData.dial.map(dial => <DialogItems key={dial.id} adres={dial.adres} name={dial.name} id={dial.id} />);
  let messagesElements = props.messagesData.messages.map(messages => <Message key={messages.id} message={messages.message} id={messages.id} />);


  if (!props.isAuth) {
    return <Redirect to='./Login' />
  }
  const onSubmit = (values) => {
    props.addMessage(values)
   
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements} </div>
      <div className={s.messages}>{messagesElements}
      

        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className={s.form}>

              <div>
                <label></label>
                <Field
                  name="Message"
                  component="input"
                  type="text"
                  placeholder="Введите сообщение"
                />
              </div>

              <div className={s.buttons}>

                <button
                  type="submit"
                  disabled={submitting || pristine}
                 
                >
                  Отправить
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

    </div>
  )
}
export default Dialogs;