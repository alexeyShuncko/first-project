import React, { useState } from "react";
import s from './StatisticTableSumm.module.css';
import FormBynUsd from "../../../helpers/FormBynUsd/FormBynUsd";


const StatisticTableSumm = (props) => {

    let [editBYN, setEditBYN] = useState(false)


    const activEditBYN =()=> {
        setEditBYN(true)
    }
    const deActivEditBYN =()=> {
        setEditBYN(false)
    }

  
    return (<>
        {!editBYN
            ? <div style={props.styles} className={s.statisticDateSummValue}>
                <span className={s.itemName}>{props.total} </span>
                <span className={s.itemValue}><FormBynUsd addSelect={activEditBYN} /></span>
            </div>
            : <div style={props.styles} className={s.statisticDateSummValue}>
               <span className={s.itemName}> {(props.total / props.dollar).toFixed(2)}</span>
               <span className={s.itemValue}><FormBynUsd addSelect={deActivEditBYN} /></span>
            </div>}
    </>
    )
}

export default StatisticTableSumm