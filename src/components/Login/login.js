import React from "react"
import { Form, Field } from 'react-final-form'
import { Redirect } from "react-router";
import { Input } from "../comon/Validator/FormsControls/FormControls";
import s from './login.module.css'


const LoginForm =(props)=> {
 
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

            <div>
              <Field name="Login" component={Input} type="text" placeholder="Email"/>
            </div>

            <div>
              <Field name="Password" component={Input} type="password" placeholder="Password" />
            </div>

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
               <Field name="Captcha" component={Input} type="text" placeholder="" />
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
    />
  </div>
}
export default Login
