import React, { useState } from "react";
import s from './StatisticTableSumm.module.css';
import FormBynUsd from "../../../helpers/FormBynUsd/FormBynUsd";


const StatisticTableSumm = (props) => {

    let [editBYN, setEditBYN] = useState("BYN")

    const activEditBYN =(value)=> {
        if (value !== editBYN)
       setEditBYN(value) 
    }
  
    return (<div style={props.styles} className={s.item}>
        {editBYN === "BYN"
            ?   <span  className={s.itemName}>{props.total} </span>
            :  <span className={s.itemName}> {(props.total / props.dollar).toFixed(2)}</span>
    }
            <span className={s.itemValue}><FormBynUsd addSelect={activEditBYN} editBYN={editBYN} /></span>
    </div>
    )
}

export default StatisticTableSumm