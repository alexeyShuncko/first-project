import React, { useState } from "react";
import FormBynUsd from "../../../../helpers/FormBynUsd/FormBynUsd";
import s from './DiagrammTotal.module.css';



const DiagrammTotal = (props) => {


    let [edit, setEdit] = useState(false)

    const activEdit = () => {
        setEdit(true)
    }
    const deActivEdit = () => {
        setEdit(false)
    }

    return (
        <>
            {!edit
                ? <div className={s.diagrammSummValue}>
                    <span className={s.itemNum}>{props.total}</span>
                    <span className={s.itemValuta}><FormBynUsd addSelect={activEdit} /></span>
                </div>
                : <div className={s.diagrammSummValue}>
                   <span className={s.itemNum}> {(props.total / props.dollar).toFixed(2)}</span>
                   <span className={s.itemValuta}> <FormBynUsd addSelect={deActivEdit} /></span>
                </div>
            }
        </>
        )
}


export default DiagrammTotal