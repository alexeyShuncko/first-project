import React from 'react';
import { Form } from 'react-final-form';
import s from './SalaryValue.module.css';
import { Field } from 'react-final-form';



const SalaryValue = (props) => {

   
    const addSelect = (e) => {
        if (e.target.value !== props.diagramm.salaryValue) {
            props.addSalaryValue(e.target.value)
        }
    }
  
    const onSubmit = (values) => {
}

    return (
        
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label> </label>
                            <Field onBlur={addSelect}
                                name="valuta" component="select" >
                                <option value="BYN">BYN</option>
                                <option value="USD">USD</option>
                            </Field>
                        </div>
                    </form>
                )}
            />
        </div>
)
}


export default SalaryValue

