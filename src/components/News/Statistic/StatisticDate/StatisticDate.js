import React, { useEffect, useState } from "react";
import s from './StatisticDate.module.css';
import DiagrammContainer from "./DIagrammContainer/DIagrammContainer";


const StatisticDate = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [editVal, setEditVal] = useState(false)
    let [tableVal, setTableVal] = useState(false)

    
    const activateEditMode = () => {
        if (props.diagramm.activ && props.diagramm.periodPo && props.diagramm.periodS) {
            setEditMode(true)
            setEditVal(false)
        }
        else setEditVal(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        setTableVal(false)
    }
    const statisticPeriod = () => {
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
            return rew
        }
        else if (props.diagramm.activ === 'transport') {
            let rew = props.diagramm.transport.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
            return rew
        }
        return []

    }

    const tableStatistic = statisticPeriod()

    useEffect(() => {
        if (tableStatistic.length === 0) { setTableVal(true) }
        else setTableVal(false)
    }, [tableStatistic]

    )
    return (
        <div className={s.statisticDate}>
            <div className={s.statisticDateItem}>
                <div className={s.statisticDateTable}>
                    <div>Таблица расходов по выбранной категории за выбранный период. </div>
                    {!editMode
                        ? <div>
                            <button onClick={activateEditMode} >
                                Показать
                            </button>
                        </div>
                        : <div >
                            <button onClick={deActivateEditMode}>
                                Убрать
                            </button>

                            {tableVal
                                ? <div className={s.categoryVal}>Нет расходов на {props.diagramm.activ} за выбранный период</div>
                                : <div className={s.statisticName}>
                                    <span className={s.statisticNameDate}><b>Дата:</b></span>
                                    <span className={s.statisticNameDate}> <b>Сумма: </b></span>
                                </div>
                            }
                            {props.diagramm.activ && tableStatistic.map(a =>
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
                    {/* {tableVal 
                        ? <div className={s.categoryVal}>Нет расходов за выбранный период</div>
                        : null
                    } */}
                </div>
            </div>
            <div className={s.statisticDateDiagramm}>
                <DiagrammContainer diagramm={props.diagramm} />
            </div>


        </div>
    )
}

export default StatisticDate