import React from 'react';
import { Field, Form } from 'react-final-form';
import s from './DiagrammMain.module.css';
import { useState } from 'react';
import Legend from './Legend';


const DiagrammMain = (props) => {

    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)

    }
    const deActivateEditMode = (values) => {
        setEditMode(false)
    }

    const onSelectChange = (e) => {
        props.addSelectDiagramm(e.target.value)
        deActivateEditMode()
    }

    const onSubmit = (values) => {

    }
    return (
        <div className={s.diagrammMain}>

            <div className={s.diagrammMainName}>
                Диаграмма расходов за всё время, 
                {!editMode 
                ? <div className={s.diagrammMainNameValue}
                onClick={activateEditMode} 
                title="Нажми, чтобы изменить)">в {props.diagramm.selectDiagramm} </div>
                : <Form
                        onSubmit={onSubmit}

                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit} className={s.form}>

                                <Field onBlur={onSelectChange} name="select" component="select" >

                                    <option value="процентах" >в процентах</option>
                                    <option value="рублях">в рублях</option>
                                    <option value="долларах">в долларах</option>
                                </Field>
                            </form>
                        )}
                    />}
            </div>
            <div className={s.diagrammMainDiagramm}>
                <canvas id="tutorial" className={s.diagramm}></canvas>
                <div>
                    <Legend 
                diagramm={props.diagramm} 
                addEditColor={props.addEditColor}/>
                </div>
            </div>

        </div>
    )
}
export default DiagrammMain




