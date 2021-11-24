import React from 'react';
//import s from './SalaryValue.module.css';
import FormBynUsd from '../../../../../helpers/FormBynUsd/FormBynUsd';


const SalaryValue = (props) => {

    const addSelect = (e) => {
        if (e.target.value !== props.diagramm.salaryValue) {
            props.addSalaryValue(e.target.value)
        }
    }

    return (
        <div>
            <FormBynUsd addSelect={addSelect} />
        </div>
    )
}

export default SalaryValue

