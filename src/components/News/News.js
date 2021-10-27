import React from 'react';
import s from './News.module.css';
import Diagram from './Diagram';
import { FormDiagram } from './FormDiagram';
import Legend from './Legend';
import { connect } from 'react-redux';
import { addDiagramm } from './../../Redux/diagrammReducer';
import Statistic from './Statistic';


class News extends React.Component {

    componentDidMount() {
        Diagram(this.props.diagramm)
    }
    componentDidUpdate() {
        Diagram(this.props.diagramm)
    }

    render() {
        return (
            <div className={s.newsItems}>
                <div className={s.formExpenses}>
                    <FormDiagram addDiagramm={this.props.addDiagramm} />
                </div>
                <div className={s.diagrammFragment}>
                    <div>
                      <h2>  Диаграмма расходов в процентах </h2>
                    </div>
                    <div><canvas id="tutorial" className={s.diagramm}></canvas></div>

                </div>

                <Legend />

                <Statistic  diagramm={this.props.diagramm}/>

            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses.diagramm
    }
}

export default connect(mapStateToProps, { addDiagramm })(News)




