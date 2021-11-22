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
    
            // var SS = date.getSeconds();
            // if (SS < 10) SS = '0' + SS;
          
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


