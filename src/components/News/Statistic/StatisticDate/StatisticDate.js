import React, { useEffect, useState } from "react";
import s from './StatisticDate.module.css';
import DiagrammContainer from "./DIagrammContainer/DIagrammContainer";
import StatisticTableSumm from "./StatisticTableSumm/StatisticTableSumm";


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

    const diagramm = props.diagramm
   
    function itemSelect(array) {
        for (let item of Object.values(array)) {
            if (item.nameRus === props.diagramm.activ) {
                let rew = item.data.filter(a =>
                    a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime)
                    && a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
                    return rew}
        }
        return []
    } 
    function colorInput(array) {
        for (let item of Object.values(array)) {
            if (item.nameRus === props.diagramm.activ) {
               let color = item.color   
               return color
            }
        }
    }
    
    const styles = {
        borderBottom: `solid 2px ${colorInput(diagramm)}`
    }

    const tableStatistic = itemSelect(diagramm)

    function arraySum(array){
        let sum = 0;
        for(let i = 0; i < array.length; i++){
            sum += array[i];
            }
        return sum
        }
        const total = arraySum(tableStatistic.map(a => a.num))

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
                                ? <div className={s.categoryVal}>Нет расходов на {props.diagramm.activ.slice(-1) === 'а' 
                                ? props.diagramm.activ.slice(0, -1) + 'у'
                                : props.diagramm.activ
                            } <div>за выбранный период</div></div>
                                : <div className={s.statisticName}>
                                    <span className={s.statisticNameDate}><b>Дата:</b></span>
                                    <span className={s.statisticNameDate}> <b>Сумма: </b></span>
                                </div>
                            }
                            {props.diagramm.activ && tableStatistic.map(a =>
                                <div key={a.id}  className={s.statisticDate}>
                                    <span className={s.statisticDateTime}>  {a.time}  </span>
                                    <span className={s.statisticDateNum}> {a.num} </span>
                                </div>)
                            }
                            {!tableVal && <div className={s.statisticDateSumm} >
                                Потрачено на <span className={s.categorySumm}> {props.diagramm.activ.slice(-1) === 'а' 
                                ? props.diagramm.activ.slice(0, -1) + 'у'
                                : props.diagramm.activ
                            } </span> <div> за выбранный период: </div>
                              <StatisticTableSumm 
                              total={total} 
                              styles={styles}
                              dollar={props.diagramm.dollar.Cur_OfficialRate} />
                                </div>}
                            
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
                <DiagrammContainer 
                 addSelectDiagrammStat={props.addSelectDiagrammStat}
                diagramm={props.diagramm} />
            </div>


        </div>
    )
}

export default StatisticDate