import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import s from '../News.module.css';
import DiagrammContainer from "./DIagrammContainer";


const StatisticDate = (props) => {


    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
        
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }
    

    const statisticPeriod = (values) => {
        if (props.diagramm.activ==='food') { let rew = props.diagramm.food.data.filter(a =>
            a.time <= (values.periodPo + ' ' + values.periodPoTime) && a.time >= (values.periodS + ' ' + values.periodSTime))
        return rew}
         else if (props.diagramm.activ==='alcohol') { let rew = props.diagramm.alcohol.data.filter(a =>
            a.time <= (values.periodPo + ' ' + values.periodPoTime) && a.time >= (values.periodS + ' ' + values.periodSTime))
        return rew}
        else if (props.diagramm.activ==='apartment') { let rew = props.diagramm.apartment.data.filter(a =>
            a.time <= (values.periodPo + ' ' + values.periodPoTime) && a.time >= (values.periodS + ' ' + values.periodSTime))
        return rew}
        else if (props.diagramm.activ==='transport') { let rew = props.diagramm.transport.data.filter(a =>
            a.time <= (values.periodPo + ' ' + values.periodPoTime) && a.time >= (values.periodS + ' ' + values.periodSTime))
        return rew}
       
    }

    const onSubmit = (values, form) => {
        props.addPeriod(values.periodS,
            values.periodPo,
            values.periodSTime,
            values.periodPoTime)

        //form.reset()
    }
  

    return (
        <div className={s.statisticDate}>

            <Form
                onSubmit={onSubmit}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>
                        <div className={s.period}>
                            <label>Период : </label>
                            <div className={s.periodStatistic}>
                                <label>C: </label>
                                <Field name="periodS" component="input" type="date"></Field>
                                <Field name="periodSTime" component="input" type="time"></Field>
                            </div>
                            <div className={s.periodStatistic}>
                                <label>По: </label>
                                <Field name="periodPo" component="input" type="date"></Field>
                                <Field name="periodPoTime" component="input" type="time"></Field>
                            </div>
                            <div> <button type='submit'
                            disabled={submitting||pristine}
                            >
                                Добавить период
                            </button> 
                           </div>
                        </div>

                        <div className={s.button}>
                            {!editMode  
                            ? <div> <button onClick={activateEditMode} >
                                Таблица
                            </button> 
                           </div>
                            : <div >
                                 <button onClick={deActivateEditMode}>
                                    Убрать Таблицу
                                </button>
                              
                                <div className={s.statisticName}>
                                    <span className={s.statisticNameDate}><b>Дата:</b></span>
                                    <span className={s.statisticNameDate}> <b>Сумма: </b></span>
                                </div> 
                                 
                                {props.diagramm.activ && statisticPeriod(values).map(a =>
                                    <div key={a.id} className={s.statisticDate}>
                                        <span className={s.statisticDateTime}>  {a.time}  </span>
                                        <span className={s.statisticDateNum}> {a.num} </span>
                                    </div>)
                                }
                               
                                </div>}
                                <DiagrammContainer diagramm={props.diagramm}  />
                            
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default StatisticDate