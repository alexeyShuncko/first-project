import React, { useState } from "react";
import s from './StatisticDate.module.css';
import DiagrammContainer from "./DIagrammContainer/DIagrammContainer";


const StatisticDate = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [editVal, setEditVal] = useState(false)
    
    const activateEditMode = () => {
        if (props.diagramm.periodPo && props.diagramm.periodS) {
            setEditMode(true)
        }
        else  setEditVal(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const category = props.diagramm.category

    let result = 
    
    
     category.map(a =>[a.nameRus, a.data.filter(a=>
         a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) && 
        a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))])  // фильтрую в зависимости от выбранного периода

     let newResult = result.map(a=>a[1].map(e=> Object.defineProperty(e, 'name', {
         value: a[0],
         writable: true,
        enumerable: true,
        configurable: true
       })))                                              //добавляю свойство 'name' в каждый объект с соответствующим значением

       let total = newResult[0].concat(item(newResult))  // соединяю массивы ...........

       console.log(newResult)

     function item(newResult) {
     
         for (let i=1;  i < newResult.length; i++) {
         
         //newResult[i]
         
        }
        
     }
console.log(item(newResult))
  

      let totalSort =total.sort((a, b) => a.time > b.time ? 1 : -1)            //сортировка по времени 
    
    //console.log(result)
    //console.log(total)
    //console.log(totalSort) 
  
    return (
        <div className={s.statisticDate}>
            <div className={s.statisticDateItem}>
                <div className={s.statisticDateTable}>
                    <div>Таблица расходов по всем  категориям за выбранный период. </div>
                    {!editMode
                        ? <div>
                            <button onClick={activateEditMode}> Показать </button>
                        </div>
                        : <div >
                            <button onClick={deActivateEditMode}> Убрать </button>

                            {totalSort.length === 0

                                ? <div className={s.categoryVal}>Нет расходов за выбранный период</div>

                                : <>
                                <div className={s.statisticTable}>
                                    <div className={s.statisticName}>
                                    <span className={s.statisticNameCateg}>Категория:</span>
                                    <span className={s.statisticNameDate}>Дата:</span>
                                    <span className={s.statisticNameSumm}>Сумма:</span>
                                   
                                    </div>

                                    {totalSort.map(a => <div key={a.time} className={s.statisticDate}>
                                        <span className={s.statisticDateName}> {a.name} </span>
                                        <span className={s.statisticDateTime}>  {a.time}  </span>
                                        <span className={s.statisticDateNum}> {a.num} </span>
                                        
                                    </div>)}

                                </div>
                                    </>}
                            
                        </div>}
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