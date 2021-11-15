import React from "react";
import { Field, Form} from "react-final-form";
import s from './Statistic.module.css';
import StatisticDate from './StatisticDate/StatisticDate';
import { addDiagramm, addSalary, addSelectDiagramm, 
    addActiv, addPeriodSTime, addSalaryValueTrue,addPeriodS, 
    addPeriodPo, addPeriodPoTime} from '../../../Redux/diagrammReducer';
import { connect } from 'react-redux';

const Statistic = (props) => {

    const colorActiv = (e) => {
        if (e.target.value !== props.diagramm.activ) {
            props.addActiv(e.target.value)
        }
    }
    const periodS = (e) => {
        console.log('попал 1')
        if (e.target.value !== props.diagramm.periodS) {
            props.addPeriodS(e.target.value)
        }
    }
    const periodPo = (e) => {
        console.log('попал 2')
        if (e.target.value !== props.diagramm.periodPo) {
            props.addPeriodPo(e.target.value)
        }
    }
    const periodSTime = (e) => {
        console.log('попал 3')
        if (e.target.value !== props.diagramm.periodSTime) {
            props.addPeriodSTime(e.target.value)
        }
    }
    const periodPoTime = (e) => {
        console.log('попал 4')
        if (e.target.value !== props.diagramm.periodPoTime) {
            props.addPeriodPoTime(e.target.value)
        }
    }

    const colorBorder =()=> {

        if (props.diagramm.activ === 'food') {
            return <span style={{ borderBottom: `solid ${props.diagramm.food.color}` }}>
                Всего потрачено : <b>{props.diagramm.food.summ.toFixed(2)} рублей.</b></span>
        }
        else if (props.diagramm.activ === 'alcohol') {
            return <span style={{ borderBottom: `solid ${props.diagramm.alcohol.color}` }}>
                Всего потрачено :<b> {props.diagramm.alcohol.summ.toFixed(2)} рублей.</b></span>
        }
        else if (props.diagramm.activ === 'apartment') {
            return <span style={{ borderBottom: `solid ${props.diagramm.apartment.color}` }}>
                Всего потрачено :<b> {props.diagramm.apartment.summ.toFixed(2)} рублей.</b></span>
        }
        else if (props.diagramm.activ === 'transport') {
            return <span style={{ borderBottom: `solid ${props.diagramm.transport.color}` }}>
                Всего потрачено :<b> {props.diagramm.transport.summ.toFixed(2)} рублей.</b></span>
        }
    }


    const onSubmit = (values) => {   
      
    }

    const colorInput = () => {
        if (props.diagramm.activ === 'food') {
            return props.diagramm.food.color
        }
        else if (props.diagramm.activ === 'alcohol') {
            return props.diagramm.alcohol.color
        }
        else if (props.diagramm.activ === 'apartment') {
            return props.diagramm.apartment.color
        }
        else if (props.diagramm.activ === 'transport') {
            return props.diagramm.transport.color
        }
        return s.option
    }
 

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
                            <Field  onClick={colorActiv}
                            name="favorite" component="select" className={s.option} 
                            style={{ backgroundColor: ` ${colorInput()}`}} 
                            >
                                <option>{props.diagramm.activ} </option>
                                <option value="food" style={{ backgroundColor: ` ${props.diagramm.food.color}` }}>Еда</option>
                                <option value="alcohol" style={{ backgroundColor: ` ${props.diagramm.alcohol.color}` }}>Алкоголь</option>
                                <option value="apartment" style={{ backgroundColor: ` ${props.diagramm.apartment.color}` }} >Квартира</option>
                                <option value="transport" style={{ backgroundColor: ` ${props.diagramm.transport.color}` }} >Транспорт</option>
                            </Field>
                        
                        <div> {props.diagramm.activ ? colorBorder() : null} </div> 
                        </div>
                        <div className={s.period}>
                                <label className={s.categoryStatisticName}>Период : </label>
                                <div className={s.periodStatistic}>
                                    <label>C: </label>
                                    <Field onBlur= {periodS} name="periodS" component="input" type="date"></Field>
                                    <Field onBlur= {periodSTime} name="periodSTime" component="input" type="time"></Field>
                                </div>
                                <div className={s.periodStatistic}>
                                    <label>По: </label>
                                    <Field  onBlur= {periodPo} name="periodPo" component="input" type="date"></Field>
                                    <Field onBlur= {periodPoTime} name="periodPoTime" component="input" type="time"></Field>
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
export default connect (mapStateToProps,{ addDiagramm, addActiv, 
    addSalary, addPeriodS, addPeriodPo, addPeriodSTime , addPeriodPoTime,  addSelectDiagramm, addSalaryValueTrue})(Statistic)