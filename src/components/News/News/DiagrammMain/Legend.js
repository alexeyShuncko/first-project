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



    return (
    <div className={s.Legend}>  
        <div>{!editMode
        ?<span onClick={activateEditMode} className={s.legend} style={{ backgroundColor: ` ${props.diagramm.food.color}` }}>&nbsp;</span>
        : <input name='food' defaultValue={props.diagramm.food.color}
        className={s.inputColorValue} onBlur={onSelectChange} type= "color"></input>
        }
            <span> - Еда </span>
        </div>

        <div>{!editMode
            ?<span onClick={activateEditMode} className={s.legend} style={{ backgroundColor: ` ${props.diagramm.alcohol.color}` }}>&nbsp;</span>
            : <input name='alcohol' defaultValue={props.diagramm.alcohol.color}
            className={s.inputColorValue} onBlur={onSelectChange} type= "color"></input>
        }
            <span> - Алкоголь </span>
        </div>

        <div>{!editMode
            ?<span onClick={activateEditMode} className={s.legend} style={{ backgroundColor: ` ${props.diagramm.apartment.color}` }}>&nbsp;</span>
            :<input name='apartment' defaultValue={props.diagramm.apartment.color}
            className={s.inputColorValue} 
            onBlur={onSelectChange} type= "color"></input>
        }
            <span> - Квартира </span>
        </div>

        <div>{!editMode
            ?<span onClick={activateEditMode} className={s.legend} style={{ backgroundColor: ` ${props.diagramm.transport.color}` }}>&nbsp;</span>
            :<input name='transport' defaultValue={props.diagramm.transport.color}
            className={s.inputColorValue} onBlur={onSelectChange} type= "color"></input>
        }
            <span> - Транспорт </span>
        </div>
    </div>

    )

}
export default Legend;



