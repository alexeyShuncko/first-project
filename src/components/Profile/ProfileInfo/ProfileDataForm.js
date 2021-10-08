import React from "react"
import { Field, Form } from "react-final-form"
import  s from './ProfileInfo.module.css';


const ProfileDataForm = (props) => {

const userId = props.userId
const onSubmit = (values) => {
         props.getUpdateProfile(values,userId)
        //  setTimeout (()=> {
        //     props.deactivateEditMode() 
        // },2000)
}


    return <div>
       
       
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={{
                    ...props.profile
                  }}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>FullName : </label>
                            <Field name="fullName" placeholder="" component="input" type="text"  />
                        </div>
                        <div>
                            <label>AboutMe : </label>
                            <Field name="aboutMe" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>LookingForAJob : </label>
                            <Field name="lookingForAJob" placeholder="" component="input" type="checkbox" />
                        </div>
                        <div>
                            <label>LookingForAJobDescription : </label>
                            <Field name="lookingForAJobDescription" placeholder="" component="input" type="text" />
                        </div>

                        <div><b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <div key={key}><b>{key} : <Field  name = {'contacts.' + key} placeholder="" component="input" type="text" /> </b></div>
        })} </div>
<div className={s.button}>
                        <button type="submit" 
                        //disabled={submitting || pristine} сделать видимой невидимой
                        >
                            Изменить
                        </button>
                        <button type="button" 
                        onClick={props.deactivateEditMode}
                        >
                            Назад
                        </button>
                        {props.error && <span className={s.error}>Некоректные данные в поле: <b>{props.error}</b></span>}
</div>
                    </form>
                )}
            />
        </div>
    </div>
}

export default ProfileDataForm