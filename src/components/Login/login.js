import React from "react"
import { Form, Field } from 'react-final-form'
import { Redirect } from "react-router";
import { Input } from "../comon/Validator/FormsControls/FormControls";
//import { getLoginThunk } from "../../Redux/AuthReducer";

import s from './login.module.css'


const LoginForm =(props)=> {

  
   const onSubmit = (values) => {

    let email = values.Login
    let password = values.Password
    let rememberMe = values.Remember

    //window.alert(JSON.stringify(values, 0, 2)); 

    props.getLoginThunk(
      email,
      password,
      rememberMe)
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
          <form onSubmit={handleSubmit} className={s.form}>

            <div>
              <label></label>
              <Field
                name="Login"
                component={Input}
                type="text"
                placeholder="Email"
              />
            </div>

            <div>
              <label></label>
              <Field
                name="Password"
                component={Input}
                type="password"
                placeholder="Password"
              />
            </div>

            <div>
              <label>Remember my</label>
              <Field
                name="Remember"
                component="input"
                type="checkbox" 
                disabled={submitting || pristine}/>
            </div>

            <div className={s.buttons}>

              <button
                type="submit"
                disabled={submitting || pristine}
              >
                Login
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}

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

    />
  </div>
}
export default Login
