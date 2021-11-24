import React from 'react';
import s from './SalarySpent.module.css';
import FormBynUsd from '../../../../../helpers/FormBynUsd/FormBynUsd';


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

    return (<div className={s.salarySpent}>

        <div className={s.totalSummName}> Всего потрачено: </div>
        <div className={s.salarySpentValue}> {props.diagramm.salarySpentSelect === 'BYN'
            ? totalSumm.toFixed(2)
            : (totalSumm / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)
        } </div>
        <div className={s.salarySpentValuta}>
            <FormBynUsd addSelect={addSelect} />
        </div>
    </div>

    )
}

export default SalarySpent

