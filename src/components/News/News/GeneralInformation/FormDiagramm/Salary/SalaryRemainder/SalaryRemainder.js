import React from 'react';
import s from './SalaryRemainder.module.css';
import FormBynUsd from '../../../../../helpers/FormBynUsd/FormBynUsd';


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

    return (<div className={s.salaryRemainder}>


        <div className={s.balanceName}> Должно остаться: </div>


        <div className={s.salaryRemainderValue}> {props.diagramm.salaryRemainderSelect === 'BYN'
            ? (props.diagramm.salary.salaryNum - totalSumm).toFixed(2)
            : ((props.diagramm.salary.salaryNum - totalSumm) / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)
        } </div>

        <div className={s.salaryRemainderValuta}>
        <FormBynUsd addSelect={addSelect}/>
        </div>
    </div>

    )
}

export default SalaryRemainder

