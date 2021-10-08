import React from "react"
import { Field, Form } from "react-final-form"
import s from './ProfileInfo.module.css';


const ProfileDataForm = (props) => {

    const userId = props.userId
    const onSubmit = (values) => {
        props.getUpdateProfile(values, userId)
        //  setTimeout (()=> {
        //     props.deactivateEditMode() 
        // },2000)
    }

    const resetButton =()=> {
        
        props.deactivateEditMode()
        props.setError([])
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
                            <Field name="fullName" placeholder="" component="input" type="text" />
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
                            return <div key={key}><b>{key} : <Field
                                className={props.error.filter( e => e === key.toLowerCase()).length !== 0 ? s.field : ''}
                                name={'contacts.' + key}
                                placeholder=""
                                component="input"
                                type="text" /> </b></div>
                        })} </div>
                        <div className={s.button}>
                            <button type="submit"
                            //disabled={submitting || pristine} сделать видимой невидимой
                            >
                                Изменить
                            </button>
                            <button type="button"
                                onClick={resetButton}
                            >
                                Назад
                            </button>
                            {props.error.length !== 0  && <span className={s.error}>Некорректные данные в поле: <b>{props.error.join(',')}</b></span>}
                        </div>
                    </form>
                )}
            />
        </div>
    </div>
}

export default ProfileDataForm