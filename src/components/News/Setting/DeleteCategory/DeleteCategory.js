import React from 'react';
import { Form } from 'react-final-form';
import s from './DeleteCategory.module.css';
import { Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';


const DeleteCategory =(props)=> {


    const diagramm = props.diagramm.category

    const returnSetting = () => {
        props.history.push('/setting')
    }

    const onSubmit = (values, form) => {
        props.deleteCategory(values.favorite)
        form.reset()
    }
    return (
        <div className={s.item}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} >
                        <div className={s.nameInput}>
                            <label> Название категории: </label>
                            <Field  name="favorite" 
                                component="select" className={s.option}
                                   >
                                    <option>{props.diagramm.activ} </option>
                                    {diagramm.map(a=>
                                    {if (a)  return (
                                        <option value={a.nameRus} key={a.id}
                                        style={{ backgroundColor: ` ${a.color}` }}>{a.nameRus}</option>)
                                        else return null
                                    }
                                        )}
                                </Field>
                        </div>
                       
                        <div className={s.buttonItem}>
                            <button type="submit"
                                disabled={submitting || pristine} //сделать видимой невидимой
                            >
                                Удалить категорию
                            </button>
                            <button type="button" onClick={returnSetting}>
                                Назад к настройкам
                            </button>
                        </div>
                    </form>
                )}
            />

        </div>
    )

}

export default withRouter(DeleteCategory)