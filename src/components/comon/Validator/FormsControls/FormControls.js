import React from "react";
import s from './FormControls.module.css'

export const Textarea =({input,meta,...props})=> {
    return (
        <div>
        <div className={meta.touched && meta.error ? s.formControlErrors : s.classs  }>
            <textarea {...input} {...props} />
        </div>
        <div  className={s.formError}>
           {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
        </div>

    )
}
export const Input =({input,meta,...props})=> {
    return (
        <div className={s.inputPosishn}>
        <div className={meta.touched && meta.error ? s.formControlErrors : s.classs  }>
            <input {...input} {...props} />
        </div>
        <div  className={s.formError}>
           {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
        </div>

    )
}