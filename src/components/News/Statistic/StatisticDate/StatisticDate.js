import React, { useState } from "react";
import s from './StatisticDate.module.css';
import DiagrammContainer from "./DIagrammContainer/DIagrammContainer";


const StatisticDate = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [editVal, setEditVal] = useState(false)

    const activateEditMode = () => {
        if (props.diagramm.activ && props.diagramm.periodPo && props.diagramm.periodS) {
            setEditMode(true)
            setEditVal(false)
        }
        else setEditVal(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const statisticPeriod = () => {
        console.log()
        if (props.diagramm.activ === 'food') {
            let rew = props.diagramm.food.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
            return rew
        }
        else if (props.diagramm.activ === 'alcohol') {
            let rew = props.diagramm.alcohol.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
            return rew
        }
        else if (props.diagramm.activ === 'apartment') {
            let rew = props.diagramm.apartment.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
            console.log(rew)
            return rew
        }
        else if (props.diagramm.activ === 'transport') {
            let rew = props.diagramm.transport.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
            return rew
        }

    }

    return (
        <div className={s.statisticDate}>
            <div className={s.statisticDateItem}>
                <div className={s.statisticDateTable}>
                    {!editMode
                        ? <div>
                            <button onClick={activateEditMode} >
                                Таблица
                            </button>
                        </div>
                        : <div >
                            <button onClick={deActivateEditMode}>
                                Убрать
                            </button>
                            <div className={s.statisticName}>
                                <span className={s.statisticNameDate}><b>Дата:</b></span>
                                <span className={s.statisticNameDate}> <b>Сумма: </b></span>
                            </div>
                            {props.diagramm.activ && statisticPeriod().map(a =>
                                <div key={a.id} className={s.statisticDate}>
                                    <span className={s.statisticDateTime}>  {a.time}  </span>
                                    <span className={s.statisticDateNum}> {a.num} </span>
                                </div>)
                            }

                        </div>}
                    {editVal && !props.diagramm.activ
                        ? <div className={s.categoryVal}>Выбери категорию</div>
                        : null
                    }
                    {editVal && (!props.diagramm.periodPo || !props.diagramm.periodS)
                        ? <div className={s.categoryVal}>Выбери период</div>
                        : null
                    }
                </div>
            </div>
            <div className={s.statisticDateDiagramm}>
                <DiagrammContainer diagramm={props.diagramm} />
            </div>


        </div>
    )
}

export default StatisticDate