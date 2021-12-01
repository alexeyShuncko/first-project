import React from 'react';
import { Form, Field } from 'react-final-form';
//import s from './AddCategory.module.css';
import { withRouter } from 'react-router-dom';


const AddCategory = (props) => {

    const returnSetting =()=> {
        props.history.push('/setting')
    }

    const onSubmit = (values, form) => {
        props.addCategory(values.name, values.color)
        form.reset()
    }
    return (<>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit} >
                    <label> Название категории: </label>
                    <Field 
                        autoComplete="off"
                        name="name"
                        placeholder=""
                        component="input"
                        type="text"
                        required
                    />
                    <label> Цвет: </label>
                    <Field 
                        name="color"
                        // placeholder="#ffffff"
                        component="input"
                        type="color"
                    />

                    <div >
                        <button type="submit"
                            disabled={submitting || pristine} //сделать видимой невидимой
                        >
                            Добавить
                        </button>
                        <button type="button" onClick={returnSetting}>
                            Назад к настройкам
                        </button>
                    </div>
                </form>
            )}
        />

    </>
    )

}

export default withRouter(AddCategory)