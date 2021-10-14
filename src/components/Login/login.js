import React, { useState } from "react"
import { Form, Field } from 'react-final-form'
import { Redirect } from "react-router";
import s from './login.module.css'



const LoginForm =(props)=> {

  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
      setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
}


 
   const onSubmit = (values) => {

    let email = values.Login
    let password = values.Password
    let rememberMe = values.Remember
    let captcha = values.Captcha

    props.getLoginThunk(
      email,
      password,
      rememberMe,captcha)
  }
  

    return (
      <Form className={s.loginForm}
        onSubmit={onSubmit}

        validate={(values) => {
          const errors = {};
          if (!values.Login) {
            errors.Login = "Введите email";
          }
          if (!values.Password) {
            errors.Password = "Введите пароль";
          }
          return errors;
        }}

        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={s.form} >


            <Field name="Login">
              {({ input, meta }) => (
                <div>
                  <label>Емаил: </label>
                  <input className={meta.error && meta.touched ? s.inputError : s.input} {...input} type="text" placeholder="Email" />
                  {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
                  {props.errorLogin==="Enter valid Email"&& <span className={s.error}>Введите корректный email</span>}
                </div>
              )}
            </Field>
            
            <Field name="Password" >
              {({ input, meta }) => (
                <div>
                  <label>Пароль: </label>
                  <input 
                  className={meta.error && meta.touched ? s.inputError : s.input} {...input} 
                  type={!editMode ?"password":"text"}  
                  placeholder="Password" />
                  {!editMode 
                  ? <button  type="button" onClick={activateEditMode}>Показать</button>
                  :<button  type="button" onClick={deActivateEditMode}>Спрятать</button>}
                  {meta.error && meta.touched && <span className={s.error}>{meta.error}</span>}
                  {props.errorLogin==="Incorrect Email or Password" && <span className={s.error}>Введите корректный пароль</span>}
                 
                </div>
              )}
            </Field>
          

            <div>
              <label>Remember my</label>
              <Field name="Remember" component="input" type="checkbox" disabled={submitting || pristine}/>
            </div>

            {props.captchaUrl &&   
            <div>
              <img alt='' src={props.captchaUrl} />
            </div>}
            {props.captchaUrl &&   
            <div>
               <Field name="Captcha" component="input" type="text" placeholder="" />
            </div>}
        
            <div className={s.buttons}>
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
              <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>

          </form>
        )}
      />

    );
  };


const Login = (props) => {

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }
  return <div>
    <h1>Login</h1>
    <LoginForm
      getLoginThunk={props.getLoginThunk}
      isAuth={props.isAuth}
      captchaUrl={props.captchaUrl}
      errorLogin={props.errorLogin}
    />
  </div>
}
export default Login
