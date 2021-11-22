import React from 'react';
import { Form } from 'react-final-form';
import s from './SalarySpent.module.css';
import { Field } from 'react-final-form';



const SalarySpent = (props) => {


    const addSelect = (e) => {
        if (e.target.value !== props.diagramm.salarySpentSelect) {
            props.addSalarySpentSelect(e.target.value)
        }
    }

    const totalSumm = props.diagramm.food.summ +
        props.diagramm.alcohol.summ +
        props.diagramm.apartment.summ +
        props.diagramm.transport.summ

    const onSubmit = () => {

    }


    return (<div className={s.salarySpent}>

        <div className={s.totalSummName}> Всего потрачено: </div>
        <div className={s.salarySpentValue}> {props.diagramm.salarySpentSelect === 'BYN'
            ? totalSumm.toFixed(2)
            : (totalSumm / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)
        } </div>
        <div className={s.salarySpentValuta}>
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
    </div>

    )
}


export default SalarySpent
