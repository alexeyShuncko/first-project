import React from "react";
import { Field, Form} from "react-final-form";
import s from './Statistic.module.css';
import StatisticDate from './StatisticDate/StatisticDate';

const Statistic = (props) => {

    const colorActiv = (e) => {
        if (e.target.value !== props.diagramm.activ) {
            props.addActiv(e.target.value)
        }
    }

    const colorBorder =(values)=> {

        if (values.favorite === 'food') {
            return <span style={{ borderBottom: `solid ${props.diagramm.food.color}` }}>
                Всего потрачено : <b>{props.diagramm.food.summ.toFixed(2)} рублей.</b></span>
        }
        else if (values.favorite === 'alcohol') {
            return <span style={{ borderBottom: `solid ${props.diagramm.alcohol.color}` }}>
                Всего потрачено :<b> {props.diagramm.alcohol.summ.toFixed(2)} рублей.</b></span>
        }
        else if (values.favorite === 'apartment') {
            return <span style={{ borderBottom: `solid ${props.diagramm.apartment.color}` }}>
                Всего потрачено :<b> {props.diagramm.apartment.summ.toFixed(2)} рублей.</b></span>
        }
        else if (values.favorite === 'transport') {
            return <span style={{ borderBottom: `solid ${props.diagramm.transport.color}` }}>
                Всего потрачено :<b> {props.diagramm.transport.summ.toFixed(2)} рублей.</b></span>
        }
    }


    const onSubmit = (values) => {   
       
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

   
    return (
        <div className={s.statistic}>
            <div className={s.statisticName}>Статистика</div>
            <Form
                onSubmit={onSubmit}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>Категория : </label>
                            <Field  onClick={colorActiv}
                            name="favorite" component="select" className={s.option} style={{ backgroundColor: ` ${colorInput(values)}` }}>
                                <option />
                                <option value="food" style={{ backgroundColor: ` ${props.diagramm.food.color}` }}>Еда</option>
                                <option value="alcohol" style={{ backgroundColor: ` ${props.diagramm.alcohol.color}` }}>Алкоголь</option>
                                <option value="apartment" style={{ backgroundColor: ` ${props.diagramm.apartment.color}` }} >Квартира</option>
                                <option value="transport" style={{ backgroundColor: ` ${props.diagramm.transport.color}` }} >Транспорт</option>
                            </Field>
                        </div>
                        <div> {values.favorite ? colorBorder(values) : null} </div>                       
                    </form>
                )}
               
           
            />
             <div className={s.button}>
                <StatisticDate 
                addPeriod={props.addPeriod}
                diagramm={props.diagramm} />
                </div>
            </div>

    )
}
export default Statistic