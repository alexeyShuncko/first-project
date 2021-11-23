import React, { useEffect} from 'react';
import s from './News.module.css';
import Diagram from './DiagrammMain/Diagram';
import  FormDiagram  from './GeneralInformation/FormDiagramm/FormDiagram';
import { connect } from 'react-redux';
import { addDiagramm, addActiv, addSalary, 
    addSelectDiagramm, addSalaryValueTrue, addEditColor,
     getDollarUpdate, addSalarySpentSelect, addSalaryRemainderSelect,
     addSalaryValue } from '../../../Redux/diagrammReducer';
import DiagrammMain from './DiagrammMain/DiagrammMain';


const News =(props)=> {

    useEffect(() => {
        Diagram(props.diagramm.food, 
            props.diagramm.alcohol,
            props.diagramm.apartment,
            props.diagramm.transport, props.diagramm.selectDiagramm, props.diagramm.dollar.Cur_OfficialRate)
         }, [props.diagramm.food, 
            props.diagramm.alcohol,
            props.diagramm.apartment,
            props.diagramm.transport, props.diagramm.selectDiagramm,props.diagramm.dollar.Cur_OfficialRate]
    );
    
        return (
            <div className={s.news}>
                
                <div className={s.newsItems}>
                    <FormDiagram
                        addDiagramm={props.addDiagramm}
                        diagramm={props.diagramm}
                        addSalary={props.addSalary}
                        getDollarUpdate={props.getDollarUpdate}
                        addSalaryValueTrue={props.addSalaryValueTrue}
                        addSalarySpentSelect={props.addSalarySpentSelect}
                        addSalaryRemainderSelect={props.addSalaryRemainderSelect}
                        addSalaryValue={props.addSalaryValue}
                    />
                </div>

                <div className={s.newsItems1}>
                    <DiagrammMain
                        addSelectDiagramm={props.addSelectDiagramm}
                        diagramm={props.diagramm} 
                        addEditColor={props.addEditColor}/>
                </div>
                

            </div>
        )
    }

let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses
    }
}

export default connect(mapStateToProps,
    { addDiagramm, addActiv, addSalary, addSelectDiagramm, 
        addSalaryValueTrue , addEditColor, getDollarUpdate,
        addSalarySpentSelect, addSalaryRemainderSelect, addSalaryValue })(News)




