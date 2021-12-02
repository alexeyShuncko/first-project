import React from "react";
import { Field, Form } from "react-final-form";
import s from './Statistic.module.css';
import StatisticDate from './StatisticDate/StatisticDate';
import {
    addDiagramm, addSalary, addSelectDiagramm,
    addActiv, addPeriodSTime, addSalaryValueTrue, addPeriodS,
    addPeriodPo, addPeriodPoTime, addSelectDiagrammStat
} from '../../../Redux/diagrammReducer';
import { connect } from 'react-redux';

const Statistic = (props) => {

    const colorActiv = (e) => {
        if (e.target.value !== props.diagramm.activ) {
            props.addActiv(e.target.value)
        }
    }
    const periodS = (e) => {
        if (e.target.value !== props.diagramm.periodS) {
            props.addPeriodS(e.target.value)
        }
    }
    const periodPo = (e) => {
        if (e.target.value !== props.diagramm.periodPo) {
            props.addPeriodPo(e.target.value)
        }
    }
    const periodSTime = (e) => {
        if (e.target.value !== props.diagramm.periodSTime) {
            props.addPeriodSTime(e.target.value)
        }
    }
    const periodPoTime = (e) => {
        if (e.target.value !== props.diagramm.periodPoTime) {
            props.addPeriodPoTime(e.target.value)
        }
    }

    const diagramm = props.diagramm.category

    function itemSelect(array) {
        for (let item of Object.values(array)) {
            if (item.nameRus === props.diagramm.activ) {
                return <>
                    <span >
                        Потрачено : <b>{item.summ.toFixed(2)} рублей.</b></span>
                    <div>Или : <b>{(item.summ / props.diagramm.dollar.Cur_OfficialRate).toFixed(2)} $</b></div>
                    <div style={{ borderBottom: `solid ${item.color}` }}>
                        Или : <b>{(item.summ / 4.29).toFixed(0)} бут. по 1,5л аксамитного</b></div>
                </>
            }
        }
    }
    function colorInput(array) {
        let color =''
        for (let item of Object.values(array)) {
            if (item.nameRus === props.diagramm.activ) {
                color = item.color   
            }
        }
        return color
    }

    const styles = {
        backgroundColor: colorInput(diagramm)
    }

    function optionInput(array) {
        let select = []
        for (let item of Object.values(array)) {
           if(item.nameRus)
           select.push( <option value={item.nameRus} key={select.length +1}
                style={{ backgroundColor: ` ${item.color}` }}>{item.nameRus}</option>)
        }
        return select
    }

   
    const onSubmit = (values) => { }

    return (
        <div className={s.statistic}>
            <div className={s.statisticItem1}>
                <Form
                    onSubmit={onSubmit}
                    initialValues={{
                        ...props.diagramm
                    }}

                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit} >

                            <div className={s.categoryStatistic}>
                                <label className={s.categoryStatisticName} >Категория : </label>

                                <Field onClick={colorActiv} name="favorite" 
                                component="select" className={s.option}
                                    style={styles}>
                                    <option>{props.diagramm.activ} </option>
                                    {optionInput(diagramm)}
                                </Field>

                                <div> {props.diagramm.activ ? itemSelect(diagramm) : null} </div>
                            </div>
                            <div className={s.period}>
                                <label className={s.categoryStatisticName}>Период : </label>
                                <div className={s.periodStatistic}>
                                    <label>C: </label>
                                    <Field onBlur={periodS} name="periodS" component="input" type="date"></Field>
                                    <Field onBlur={periodSTime} name="periodSTime" component="input" type="time"></Field>
                                </div>
                                <div className={s.periodStatistic}>
                                    <label>По: </label>
                                    <Field onBlur={periodPo} name="periodPo" component="input" type="date"></Field>
                                    <Field onBlur={periodPoTime} name="periodPoTime" component="input" type="time"></Field>
                                </div>

                                {/* <div> <button type='submit'
                                
                                    disabled={submitting || pristine}>
                                    Добавить период
                                    
                                </button>
                                </div> */}

                            </div>
                        </form>
                    )}
                />
            </div>
            <div className={s.statisticItem2}>
                <StatisticDate
                addSelectDiagrammStat={props.addSelectDiagrammStat}
                    diagramm={props.diagramm} />
            </div>
        </div>

    )
}
let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses
    }
}
export default connect(mapStateToProps, {
    addDiagramm, addActiv, addSalary,
     addPeriodS, addPeriodPo, addPeriodSTime,
      addPeriodPoTime, addSelectDiagramm, addSalaryValueTrue,
      addSelectDiagrammStat
})(Statistic)