import React, { useEffect, useState } from "react";
import s from './DiagrammContainer.module.css';
import StatisticDateDiagram from './StatisticDateDiagram';


const DiagrammContainer = (props) => {


    let [edit, setEdit] = useState(false)
    let [editVal, setEditVal] = useState(false)
    let [diagrammVal, setDiagrammVal] = useState(false)


    const activateEditMode = () => {
        if (props.diagramm.periodPo && props.diagramm.periodS) {
            setEdit(true)

        }
        else setEditVal(true)
    }
    const deActivateEditMode = () => {
        setEdit(false)
        setDiagrammVal(false)
    }
    useEffect(() => {
        let eee = props.diagramm
        let x
        let diagramm = {
            food: props.diagramm.food.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) &&
                a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],

            alcohol: props.diagramm.alcohol.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) &&
                a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],

            apartment: props.diagramm.apartment.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) &&
                a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],

            transport: props.diagramm.transport.data.filter(a =>
                a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) &&
                a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0]
        }
       
        if (edit === true) {
            StatisticDateDiagram(diagramm, eee)
            setDiagrammVal(false)
            
            if (diagramm.food === undefined && diagramm.alcohol === undefined &&
                diagramm.apartment === undefined && diagramm.transport === undefined) {
                setDiagrammVal(true)
            }
        }

    }, [props.diagramm, edit]
        //  [props.diagramm.food, 
        //     props.diagramm.alcohol,
        //     props.diagramm.apartment,
        //     props.diagramm.transport, props.diagramm.selectDiagramm]
    );


    return (
        <>
            <div>Диаграмма расходов по всем категориям за выбранный период.</div>
           
            {!edit
                ? <div >
                    <button onClick={activateEditMode}> Показать </button>
                </div>
                : <div>
                    <button onClick={deActivateEditMode}> Убрать </button>
                    {diagrammVal
                ? <div className={s.categoryVal}>Нет расходов за выбранный период</div>
                : null
            }
                    <div><canvas id="period" width='200' height='200'></canvas></div>
                </div>
            }
            {editVal && (!props.diagramm.periodPo || !props.diagramm.periodS)
                ? <div className={s.categoryVal}>Выбери период</div>
                : null
            }
           

        </>)
}


export default DiagrammContainer