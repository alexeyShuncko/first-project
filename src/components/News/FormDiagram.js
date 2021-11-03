import React from 'react';
import { Form } from 'react-final-form';
import s from './News.module.css';
import { Field } from 'react-final-form';
import Salary from './Salary/Salary';


export const FormDiagram = (props) => {


    

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
            />
            <h2>Сумма денег, потраченных на :</h2>
            <Form
                onSubmit={onSubmit}
                // initialValues={{
                //     ...props.profile
                // }}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div className={s.inputDiagramm}>
                            <label > Еду : </label>
                            <Field 
                            max="500" 
                            autoComplete="off" 
                            name="food" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number"
                            step={0.01}
                            />
                        </div>
                        <div className={s.inputDiagramm}>
                            <label >Алкоголь : </label>
                            <Field  autoComplete="off" 
                            name="alcohol" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>
                        <div className={s.inputDiagramm}>
                            <label>Квартиру : </label>
                            <Field autoComplete="off" 
                            name="apartment" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>
                        <div className={s.inputDiagramm}>
                            <label>Транспорт : </label>
                            <Field 
                            autoComplete="off" 
                            name="transport" 
                            placeholder="... рублей" 
                            component="input" 
                            type="number" 
                            step={0.01}/>
                        </div>

                        <div className={s.inputDiagramm}>
                            <button type="submit"
                             disabled={submitting || pristine} //сделать видимой невидимой
                            >
                                Добавить
                            </button>
                            {/* <button type="button"
                                onClick={form.reset}
                            >
                                Очистить
                            </button> */}

                        </div>
                    </form>
                )}
            />
        </div>
    )
}




