import React, { useState } from 'react';
import s from './Legend.module.css';


const Legend = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)

    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }

    const onSelectChange = (e) => {
        props.addEditColor(e.target.value, e.target.name)
        deActivateEditMode()
    }

    const diagramm = props.diagramm

    function itemSelect(diagramm) {
        let legend = []

        for (let item of Object.values(diagramm)) {

            if (item.data) {
                let qqq = <div key={legend.length + 1}>
                    {!editMode
                        ? <span onClick={activateEditMode} className={s.legend} style={{ backgroundColor: ` ${item.color}` }}>&nbsp;</span>
                        : <input name={item.name} defaultValue={item.color}
                            className={s.inputColorValue} onBlur={onSelectChange} type="color"></input>
                    }
                    <span> - {item.name} </span>
                </div>
                legend.push(qqq)
            }
        }
        return legend
    }

    return (
        <div className={s.Legend}>
            {itemSelect(diagramm)}
        </div>
    )
}
export default Legend;



