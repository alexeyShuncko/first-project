import React from 'react';
import s from './SalarySpent.module.css';

const SalarySpent = (props) => {

    const totalSumm = props.diagramm.food.summ +
        props.diagramm.alcohol.summ +
        props.diagramm.apartment.summ +
        props.diagramm.transport.summ

    return (<div className={s.salarySpent}>

        <div className={s.totalSummName}> Всего потрачено: </div>
        <div className={s.salarySpentValue}> {props.editBYN === 'BYN'
            ? totalSumm.toFixed(2)
            : (totalSumm / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)
        } </div>
    </div>
    )
}

export default SalarySpent

