import React from "react"
import { Field, Form } from "react-final-form"
import  s from './ProfileInfo.module.css';

const ProfileDataForm = (props) => {

const onSubmit=(values)=> {
    props.deactivateEditMode()
    props.getUpdateProfile(values)
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

                        <button type="submit" 
                        //disabled={submitting || pristine} сделать видимой невидимой
                        >
                            Добавить
                        </button>
                        <button type="button" 
                        onClick={props.deactivateEditMode}
                        >
                            Назад
                        </button>

                    </form>
                )}
            />
        </div>
    </div>
}

export default ProfileDataForm