import React, { useEffect, useState } from "react";
import s from './DiagrammContainer.module.css';
import StatisticDateDiagram from './StatisticDateDiagram';


const DiagrammContainer = (props) => {


    let [edit, setEdit] = useState(false)
    let [editVal, setEditVal] = useState(false)
    let [diagrammVal, setDiagrammVal] = useState(false)
    let [diagrammSumm, setDiagrammSumm] = useState(false)

    const activateEditMode = () => {
        if (props.diagramm.periodPo && props.diagramm.periodS) {
            setEdit(true)
        }
        else setEditVal(true)
    }
    const deActivateEditMode = () => {
        setEdit(false)
        setDiagrammVal(false)
        setDiagrammSumm(false)
    }

    let eee = props.diagramm

    function arraySum(array) {
        let sum = 0;
        for (let salary of Object.values(array)) {
            if (salary === undefined) {
                sum += 0
            }
            else sum += salary;
        }
        return sum
    }

    function itemSelect(array) {
        let diagramm = []
        for (let item of Object.values(array)) {

            if (item.data) {
                let x
                let qqq = item.data.filter(a =>
                    a.time <= (props.diagramm.periodPo + ' ' + props.diagramm.periodPoTime) &&
                    a.time >= (props.diagramm.periodS + ' ' + props.diagramm.periodSTime))
                    .map(a => a.num).map(i => x += i, x = 0).reverse()[0]
                if (qqq !== undefined) { diagramm.push(qqq) }
                else diagramm.push(0)
            }
        }
        return diagramm
    }
    const diagramm = itemSelect(eee)


    useEffect(() => {

        if (edit === true) {
            StatisticDateDiagram(diagramm, eee)
            setDiagrammVal(false)
            setDiagrammSumm(true)

            if (diagramm.length === 0) {
                setDiagrammVal(true)
            }
        }

    }, [props.diagramm, edit, diagramm, eee]
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
                    <div><canvas id="period"></canvas></div>
                </div>
            }
            {editVal && (!props.diagramm.periodPo || !props.diagramm.periodS)
                ? <div className={s.categoryVal}>Выбери период</div>
                : null
            }
            {diagrammSumm && <div>
                Всего потрачено за выбранный период:
                <div className={s.diagrammSummValue}>{arraySum(diagramm)} рублей.</div>
            </div>
            }


        </>)
}


export default DiagrammContainer