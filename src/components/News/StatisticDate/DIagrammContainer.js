import React from "react";
import s from '../News.module.css';
import StatisticDateDiagram from './StatisticDateDiagram';


class DiagrammContainer extends React.Component {
    
     constructor(props) {
         super(props);
         this.state = ({ edit: false });
     }

    componentDidUpdate(prevProps,diagramm,eee) {
        
               }

    activateEditMode = () => {
        this.setState({ edit: true })
    }
    deActivateEditMode = () => {
        this.setState({ edit: false })
    }


    render() {
        let eee = this.props.diagramm
        let x
            let diagramm = {
                food: this.props.diagramm.food.data.filter(a =>
                    a.time <= (this.props.diagramm.periodPo + ' ' + this.props.diagramm.periodPoTime) &&
                    a.time >= (this.props.diagramm.periodS + ' ' + this.props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],
        
                alcohol: this.props.diagramm.alcohol.data.filter(a =>
                    a.time <= (this.props.diagramm.periodPo + ' ' + this.props.diagramm.periodPoTime) &&
                    a.time >= (this.props.diagramm.periodS + ' ' + this.props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],
        
                apartment: this.props.diagramm.apartment.data.filter(a =>
                    a.time <= (this.props.diagramm.periodPo + ' ' + this.props.diagramm.periodPoTime) &&
                    a.time >= (this.props.diagramm.periodS + ' ' + this.props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0],
        
                transport: this.props.diagramm.transport.data.filter(a =>
                    a.time <= (this.props.diagramm.periodPo + ' ' + this.props.diagramm.periodPoTime) &&
                    a.time >= (this.props.diagramm.periodS + ' ' + this.props.diagramm.periodSTime)).map(a => a.num).map(i => x += i, x = 0).reverse()[0]
            }
        
        if ( this.state.edit === true  ) {
         StatisticDateDiagram(diagramm,eee)
            }
       
        
         
         if (this.state.edit === false) {
             return (
                 <div >
                     <div><canvas id="period"  width = '200' height = '200'></canvas></div>
                     <button onClick={this.activateEditMode}> Диаграмма </button>
                     
                 </div>
             )
         }
         else if (this.state.edit === true) {
             return (
                 <div>
                     <button onClick={this.deActivateEditMode}> Убрать </button> 
                     
                 </div>)
               
         }

    }
}

export default DiagrammContainer