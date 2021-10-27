import React from 'react';
import { Form } from 'react-final-form';
import s from './News.module.css';
import { Field } from 'react-final-form';


export const FormDiagram = (props) => {

    const onSubmit = (values) => {
        props.addDiagramm(values)
    }

    return (
        <div className={s.formExpenses}>
            <h2>Ежедневные данные</h2>
            <Form
                onSubmit={onSubmit}
                // initialValues={{
                //     ...props.profile
                // }}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>Еда : </label>
                            <Field name="food" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Алкоголь : </label>
                            <Field name="alcohol" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Квартира : </label>
                            <Field name="apartment" placeholder="" component="input" type="text" />
                        </div>
                        <div>
                            <label>Транспорт : </label>
                            <Field name="transport" placeholder="" component="input" type="text" />
                        </div>

                        <div className={s.button}>
                            <button type="submit"
                            //disabled={submitting || pristine} //сделать видимой невидимой
                            >
                                Добавить
                            </button>
                            <button type="button"
                                onClick={form.reset}
                            >
                                Очистить
                            </button>

                        </div>
                    </form>
                )}
            />
        </div>
    )
}




