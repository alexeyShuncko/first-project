import React from 'react';
import s from './News.module.css';


const Legend = (props) => {

    return (
    <div className={s.Legend}>  
        <div>
            <span className={s.legend1}>&nbsp;</span>
            <span> - Еда </span>
        </div>
        <div>
            <span className={s.legend}>&nbsp;</span>
            <span> - Алкоголь </span>
        </div>
        <div>
            <span className={s.legend2}>&nbsp;</span>
            <span> - Квартира </span>
        </div>
        <div>
            <span className={s.legend3} >&nbsp;</span>
            <span> - Транспорт </span>
        </div>
    </div>

    )

}
export default Legend;



