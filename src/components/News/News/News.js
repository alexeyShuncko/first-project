import React, { useEffect} from 'react';
import s from './News.module.css';
import Diagram from './DiagrammMain/Diagram';
import  FormDiagram  from './GeneralInformation/FormDiagramm/FormDiagram';
import { connect } from 'react-redux';
import { addDiagramm, addActiv, addSalary, 
    addSelectDiagramm, addSalaryValueTrue } from '../../../Redux/diagrammReducer';
import DiagrammMain from './DiagrammMain/DiagrammMain';


const News =(props)=> {

    useEffect(() => {
        Diagram(props.diagramm.food, 
            props.diagramm.alcohol,
            props.diagramm.apartment,
            props.diagramm.transport, props.diagramm.selectDiagramm)
         }, [props.diagramm.food, 
            props.diagramm.alcohol,
            props.diagramm.apartment,
            props.diagramm.transport, props.diagramm.selectDiagramm]
    );
   
        console.log('render2')
        return (
            <div className={s.news}>
                
                <div className={s.newsItems}>
                    <FormDiagram
                        addDiagramm={props.addDiagramm}
                        diagramm={props.diagramm}
                        addSalary={props.addSalary}
                        addSalaryValueTrue={props.addSalaryValueTrue}
                    />
                </div>

                <div className={s.newsItems}>
                    <DiagrammMain
                        addSelectDiagramm={props.addSelectDiagramm}
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

export default connect(mapStateToProps,
    { addDiagramm, addActiv, addSalary, addSelectDiagramm, addSalaryValueTrue })(News)




