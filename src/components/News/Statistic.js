import React from "react";
import { Field, Form } from "react-final-form";
import s from './News.module.css';

const Statistic = (props) => {
 
    const onSubmit = (values) => {
        if (values.favorite === 'food') {
            return <span>Всего потрачено : <b>{props.diagramm.food} рублей.</b></span>
        }
        else if (values.favorite === 'alcohol') {
            return <span>Всего потрачено :<b> {props.diagramm.alcohol} рублей.</b></span>
        }
        else if (values.favorite === 'apartment') {
            return <span>Всего потрачено :<b> {props.diagramm.apartment} рублей.</b></span>
        }
        else if (values.favorite === 'transport') {
            return <span>Всего потрачено :<b> {props.diagramm.transport} рублей.</b></span>
        }
    }
    const colorInput =(values)=> {
        if (values.favorite === 'food') {
            return s.food
        }
        else if (values.favorite === 'alcohol') {
            return s.alcohol
        }
        else if (values.favorite === 'apartment') {
            return s.apartment
        }
        else if (values.favorite === 'transport') {
            return s.transport
        }
        return s.option
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
                            <Field name="favorite" component="select" className={colorInput(values)} >
                            <option className={s.option}/>
                                <option value="food" className={s.food}>Еда</option>
                                <option value="alcohol" className={s.alcohol}>Алкоголь</option>
                                <option value="apartment" className={s.apartment}>Квартира</option>
                                <option value="transport"  className={s.transport}>Транспорт</option>
                            </Field>
                        </div>
                        <div className={s.summ}> {values.favorite ? onSubmit(values)   : null }
                        <span>
                      
                        </span>
                        </div>
                    </form>
                )}
            />
            
        </div>
    )
}
export default Statistic