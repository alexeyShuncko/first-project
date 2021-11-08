import React from 'react';
import { Form } from 'react-final-form';
import s from './Salary.module.css';
import { Field } from 'react-final-form';
import { useState, useEffect } from 'react';


const Salary = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)

    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }
        useEffect(() => {
            if (timer >= props.diagramm.salary.salaryDate && props.diagramm.salary.salaryValueTrue)
            { props.addSalaryValueTrue(false)
             console.log(11)}}, 
        );

    const time = new Date()
        function formatDate(date) {
    
            var dd = date.getDate();
            if (dd < 10) dd = '0' + dd;
          
            var mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
          
            var yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;
            var HH = date.getHours();
            if (HH < 10) HH = '0' + HH;
    
            var MM = date.getMinutes();
            if (MM < 10) MM = '0' + MM;
    
             var SS = date.getSeconds();
             if (SS < 10) SS = '0' + SS;
          
             return '20'+ yy + '-' + mm + '-' + dd + ' ' + HH + ':' + MM + ':' + SS;
          }
        const timer = formatDate(time)
    

    const totalSumm =  props.diagramm.food.summ +
    props.diagramm.alcohol.summ +
    props.diagramm.apartment.summ +
    props.diagramm.transport.summ

    const onSubmit = (values) => {
        props.addSalary(values.salary)
        deActivateEditMode()
}

    return (
        
        <div>
            
            {timer >= props.diagramm.salary.salaryDate 
                ? <div className={s.salaryUpdate}>Обнови ЗП</div>
                : null}

            <div className={s.salary}>
                <span className={s.salaryName} title="Нажми, чтобы изменить)" onClick={activateEditMode}> Зарплата: </span>
                <span className={s.salaryValue}> {props.diagramm.salary.salaryNum}р</span>
            </div>

            {editMode
            ? <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label> </label>
                            <Field  
                             autoFocus={true}
                            autoComplete="off" 
                            name="salary" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step="0.01"/>
                        </div>

                        <div >
                            <button type="submit" disabled={submitting || pristine}>
                                Добавить
                            </button>
                            <button type="button" onClick={deActivateEditMode}>
                                Назад
                            </button>
                         
                        </div>
                        <div >
                           
                         
                        </div>
                    </form>
                )}
            />
            : null}
            <div >
                <span> Всего потрачено: </span>
                <span> {totalSumm.toFixed(2)}
                </span>
            </div>
            <div >
                <span > Должно остаться: </span>
                <span > {(props.diagramm.salary.salaryNum - totalSumm).toFixed(2)} </span>
            </div>
        </div>
    )
}


export default Salary

