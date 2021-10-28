import React from 'react';
import { Form } from 'react-final-form';
import s from './News.module.css';
import { Field } from 'react-final-form';


export const FormDiagram = (props) => {

    const onSubmit = (values, form) => {
        console.log(values)
        if (values.food !== '' || values.alcohol !== '' || values.apartment !== '' || values.transport !== '') {
            props.addDiagramm(values)
            form.reset()
        }
    }

    return (
        <div className={s.formExpenses}>
            <h2>Сумма денег, потраченых на :</h2>
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
                            type="number" />
                        </div>
                        <div className={s.inputDiagramm}>
                            <label >Алкоголь : </label>
                            <Field autoComplete="off" name="alcohol" placeholder="... рублей" component="input" type="number" />
                        </div>
                        <div className={s.inputDiagramm}>
                            <label>Квартиру : </label>
                            <Field autoComplete="off" name="apartment" placeholder="... рублей" component="input" type="number" />
                        </div>
                        <div className={s.inputDiagramm}>
                            <label>Транспорт : </label>
                            <Field autoComplete="off" name="transport" placeholder="... рублей" component="input" type="number" />
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




