import React from 'react';
import s from './Legend.module.css';


const Legend = (props) => {

    return (
    <div className={s.Legend}>  
        <div>{1===2 
        ?<span className={s.legend} style={{ backgroundColor: ` ${props.diagramm.food.color}` }}>&nbsp;</span>
        : <input type= "color"></input>
        }
            
            <span> - Еда </span>
        </div>
        <div>
            <span className={s.legend} style={{ backgroundColor: ` ${props.diagramm.alcohol.color}` }}>&nbsp;</span>
            <span> - Алкоголь </span>
        </div>
        <div>
            <span className={s.legend} style={{ backgroundColor: ` ${props.diagramm.apartment.color}` }}>&nbsp;</span>
            <span> - Квартира </span>
        </div>
        <div>
            <span className={s.legend} style={{ backgroundColor: ` ${props.diagramm.transport.color}` }}>&nbsp;</span>
            <span> - Транспорт </span>
        </div>
    </div>

    )

}
export default Legend;



