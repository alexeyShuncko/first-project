import React from 'react';
import { Form } from 'react-final-form';
import s from './SalaryRemainder.module.css';
import { Field } from 'react-final-form';



const SalaryRemainder = (props) => {

    const addSelect = (e) => {
        if (e.target.value !== props.diagramm.salaryRemainderSelect) {
            props.addSalaryRemainderSelect(e.target.value)
        }
    }

    const totalSumm = props.diagramm.food.summ +
        props.diagramm.alcohol.summ +
        props.diagramm.apartment.summ +
        props.diagramm.transport.summ

    const onSubmit = () => {

    }

    return (<div className={s.salaryRemainder}>


        <div className={s.balanceName}> Должно остаться: </div>


        <div className={s.salaryRemainderValue}> {props.diagramm.salaryRemainderSelect === 'BYN'
            ? (props.diagramm.salary.salaryNum - totalSumm).toFixed(2)
            : ((props.diagramm.salary.salaryNum - totalSumm) / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)
        } </div>

        <div className={s.salaryRemainderValuta}>
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


export default SalaryRemainder

