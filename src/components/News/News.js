import React from 'react';
import s from './News.module.css';
import Diagram from './Diagram';
import { FormDiagram } from './FormDiagram';
import Legend from './Legend';
import { connect } from 'react-redux';
import { addDiagramm, addActiv, addSalary, addPeriodPo, addPeriodS } from './../../Redux/diagrammReducer';
import Statistic from './Statistic';


class News extends React.Component {

    componentDidMount() {
        console.log('вмонтирован')
        Diagram(this.props.diagramm)
    }
     componentDidUpdate(prevProps) {
        console.log('изменился')
         if (this.props.diagramm.food !== prevProps.diagramm.food ) {
             Diagram(this.props.diagramm)
         }
         else if (this.props.diagramm.alcohol !== prevProps.diagramm.alcohol ) {
            Diagram(this.props.diagramm)
        }
        else if (this.props.diagramm.apartment !== prevProps.diagramm.apartment ) {
            Diagram(this.props.diagramm)
        }
        else if (this.props.diagramm.transport !== prevProps.diagramm.transport ) {
            Diagram(this.props.diagramm)
        }
       
     }

    render() {
        console.log('render')
        return (
            <div className={s.newsItems}>
                <div>
                    <FormDiagram 
                    addDiagramm={this.props.addDiagramm}
                    diagramm={this.props.diagramm}
                    addSalary={this.props.addSalary}
                     />
                </div>
                <div className={s.diagrammFragment}>
                    <div>
                      <h2>  Диаграмма расходов за всё время, в процентах </h2>
                    </div>
                    <div><canvas id="tutorial" className={s.diagramm}></canvas></div>

                </div>

                <Legend diagramm={this.props.diagramm}/>

                <Statistic  addPeriodPo={this.props.addPeriodPo} 
                addPeriodS={this.props.addPeriodS}
                diagramm={this.props.diagramm} addActiv={this.props.addActiv}/>

            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses
    }
}

export default connect(mapStateToProps, { addDiagramm,addActiv, addSalary, addPeriodPo, addPeriodS })(News)




