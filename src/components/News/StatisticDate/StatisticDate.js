import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import s from '../News.module.css';
import StatisticDateDiagram from './StatisticDateDiagram';

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
            console.log(rew)
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

    const onSubmit = (values) => {
        props.addPeriodPo(values.periodPo)
            props.addPeriodS(values.periodS)
    }



const qqq =()=> {
    let eee = props.diagramm
    var x 
    let diagramm = { food: props.diagramm.food.data.filter(a => a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) && 
        a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)
        
        ).map(a => a.num).map(i=>x+=i, x=0 ).reverse()[0],

        alcohol: props.diagramm.alcohol.data.filter(a =>
            a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)),
            apartment:   props.diagramm.apartment.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)),
                transport: props.diagramm.transport.data.filter(a =>
                    a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
    }


    StatisticDateDiagram(diagramm,eee)
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

                        </div>

                        <div className={s.button}>
                            {!editMode  && <div>
                            <button type="submit" >
                                Показать
                            </button> 
                            <button onClick={qqq}>
                                    Диаграмма
                                </button></div>}
                            {editMode  && <div >
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
                                <button 
                                     onClick={deActivateEditMode}
                                >
                                    Убрать
                                </button>
                                </div>}

                            <div >
                            <canvas id="period" className={s.diagramm}></canvas>
                            </div>
                            <button type="submit"
                                     
                                >
                                    Убрать
                                </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default StatisticDate