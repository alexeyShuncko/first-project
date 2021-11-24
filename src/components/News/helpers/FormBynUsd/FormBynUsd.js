import React from 'react';
import { Form } from 'react-final-form';
import s from './FormBynUsd.module.css';
import { Field } from 'react-final-form';


const FormBynUsd = (props) => {

  
    const onSubmit = () => {
    }

    return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <Field onBlur={props.addSelect} className={s.fieldBynUsd}
                                name="valuta" component="select" >
                                <option value="BYN">BYN</option>
                                <option value="USD">USD</option>
                            </Field>
                        </div>
                    </form>
                )}
            />

    )
}

export default FormBynUsd

