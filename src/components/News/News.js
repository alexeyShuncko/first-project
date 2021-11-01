import React from 'react';
import s from './News.module.css';
import Diagram from './Diagram';
import { FormDiagram } from './FormDiagram';
import Legend from './Legend';
import { connect } from 'react-redux';
import { addDiagramm, addActiv } from './../../Redux/diagrammReducer';
import Statistic from './Statistic';


class News extends React.Component {

    componentDidMount() {
        Diagram(this.props.diagramm)
    }
     componentDidUpdate(prevProps) {
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
        return (
            <div className={s.newsItems}>
                <div className={s.formExpenses}>
                    <FormDiagram addDiagramm={this.props.addDiagramm} />
                </div>
                <div className={s.diagrammFragment}>
                    <div>
                      <h2>  Диаграмма расходов за всё время, в процентах </h2>
                    </div>
                    <div><canvas id="tutorial" className={s.diagramm}></canvas></div>

                </div>

                <Legend diagramm={this.props.diagramm}/>

                <Statistic  diagramm={this.props.diagramm} addActiv={this.props.addActiv}/>

            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses
    }
}

export default connect(mapStateToProps, { addDiagramm,addActiv })(News)




