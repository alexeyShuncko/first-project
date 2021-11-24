import React from 'react';
import { Form } from 'react-final-form';
import s from './FormDiagram.module.css';
import { Field } from 'react-final-form';
import Salary from './Salary/Salary';
import DollarRate from './DollarRate/DollarRate';


 const FormDiagram = (props) => {

    const onSubmit = (values, form) => {
       
        const time = new Date()
        function formatDate(date) {
    
            let dd = date.getDate();
            if (dd < 10) dd = '0' + dd;
          
            let mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
          
            let yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;
    
            let HH = date.getHours();
            if (HH < 10) HH = '0' + HH;
    
            let MM = date.getMinutes();
            if (MM < 10) MM = '0' + MM;
          
            return '20'+ yy + '-' + mm + '-' + dd + ' ' + HH + ':' + MM ;
          }
        const timer = formatDate(time)

        if (values.food !== '' || values.alcohol !== '' || values.apartment !== '' || values.transport !== '') {
            props.addDiagramm(values,timer)
            form.reset()
        }
    }

    return (
        <div className={s.formExpenses}>
            <Salary 
            diagramm={props.diagramm}
            addSalary={props.addSalary}
            addSalaryValueTrue={props.addSalaryValueTrue}
            addSalarySpentSelect={props.addSalarySpentSelect}
            addSalaryRemainderSelect={props.addSalaryRemainderSelect}
            addSalaryValue={props.addSalaryValue}
            />
            <div className={s.formExpensesName}>Сумма денег, потраченных на :</div>
            <div className={s.formExpensesFild}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} >

                        <div className={s.formItems}>
                            <label className={s.formItemsLabel}> Еду : </label>
                            <Field className={s.formItemsField}
                            max="500" 
                            autoComplete="off" 
                            name="food" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number"
                            step={0.01}
                            />
                        </div>
                        <div className={s.formItems}>
                            <label className={s.formItemsLabel}>Алкоголь : </label>
                            <Field  className={s.formItemsField}
                            autoComplete="off" 
                            name="alcohol" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>
                        <div className={s.formItems}>
                            <label className={s.formItemsLabel}>Квартиру : </label>
                            <Field className={s.formItemsField}  
                            autoComplete="off" 
                            name="apartment" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>
                        <div className={s.formItems}>
                            <label className={s.formItemsLabel}>Транспорт : </label>
                            <Field className={s.formItemsField}
                            autoComplete="off" 
                            name="transport" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>

                        <div className={s.formItemsButton}>
                            <button type="submit"
                             disabled={submitting || pristine} //сделать видимой невидимой
                            >
                                Добавить
                            </button>
                        </div>
                    </form>
                )}
            />
            </div>
            <DollarRate
            getDollarUpdate={props.getDollarUpdate}
            dollar={props.diagramm.dollar}
            />
        </div>
    )
}

export default FormDiagram


