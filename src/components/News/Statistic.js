import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import s from './News.module.css';

const Statistic = (props) => {


    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
      setEditMode(false)
  }

    const onSubmit = (values) => {
        if (values.favorite === 'food') {
            return <span style={{ borderBottom: `solid ${props.diagramm.food.color}` }}>
                Всего потрачено : <b>{props.diagramm.food.summ} рублей.</b></span>
        }
        else if (values.favorite === 'alcohol') {
            return <span style={{ borderBottom: `solid ${props.diagramm.alcohol.color}` }}>
                Всего потрачено :<b> {props.diagramm.alcohol.summ} рублей.</b></span>
        }
        else if (values.favorite === 'apartment') {
            return <span style={{ borderBottom: `solid ${props.diagramm.apartment.color}` }}>
                Всего потрачено :<b> {props.diagramm.apartment.summ} рублей.</b></span>
        }
        else if (values.favorite === 'transport') {
            return <span style={{ borderBottom: `solid ${props.diagramm.transport.color}` }}>
                Всего потрачено :<b> {props.diagramm.transport.summ} рублей.</b></span>
        }
    }
    const colorInput = (values) => {
        if (values.favorite === 'food') {
            return props.diagramm.food.color
        }
        else if (values.favorite === 'alcohol') {
            return props.diagramm.alcohol.color
        }
        else if (values.favorite === 'apartment') {
            return props.diagramm.apartment.color
        }
        else if (values.favorite === 'transport') {
            return props.diagramm.transport.color
        }
        return s.option
    }
    const statCategory = (values) => {
        console.log(11)
        return <span>Привет</span>
    }


    return (
        <div className={s.statistic}>
            <div ><h2>Статистика</h2></div>


            <Form
                onSubmit={onSubmit}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>Категория : </label>
                            <Field name="favorite" component="select" className={s.option} style={{ backgroundColor: ` ${colorInput(values)}` }}>
                                <option />
                                <option value="food" style={{ backgroundColor: ` ${props.diagramm.food.color}` }}>Еда</option>
                                <option value="alcohol" style={{ backgroundColor: ` ${props.diagramm.alcohol.color}` }}>Алкоголь</option>
                                <option value="apartment" style={{ backgroundColor: ` ${props.diagramm.apartment.color}` }} >Квартира</option>
                                <option value="transport" style={{ backgroundColor: ` ${props.diagramm.transport.color}` }} >Транспорт</option>
                            </Field>
                        </div>
                        <div> {values.favorite ? onSubmit(values) : null}
                            <span>

                            </span>
                        </div>
                        <div className={s.period}>
                            <label>Период : </label>
                            <Field name="periodS" component="input" type="time"></Field>
                            <Field name="periodPo" component="input" type="time"></Field>
                        </div>
                    </form>
                )}
            />
            <div className={s.button}>
                {!editMode && <button onClick={activateEditMode}>
                    Показать
                </button>}
                {editMode && <div>
                Привет 
                <button onClick={deActivateEditMode}>
                    Убрать
                </button></div>}
            <div>

            </div>

        </div>
        </div>
    )
}
export default Statistic