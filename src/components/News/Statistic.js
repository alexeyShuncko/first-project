import React from "react";
import { Field, Form } from "react-final-form";
import s from './News.module.css';

const Statistic = (props) => {

   const onSubmit =(values)=> {
    if (values.favorite === 'food') {
       <span>{props.food}</span>
    }
    else if (values.favorite === 'alcohol' ) {

    }
    else if ( values.favorite === 'apartment') {
        
    }
    else if (values.favorite === 'transport' ) {
        
    }
    }

    return (
        <div className={s.statistic}>
            <div ><h2>Статистика</h2></div>
            

            <Form
            onSubmit={onSubmit}

                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={s.form}>

                        <div>
                            <label>Категория : </label>
                            <Field name="favorite" component="select">
                            <option />
                                <option value="food">Еда</option>
                                <option value="alcohol">Алкоголь</option>
                                <option value="apartment">Квартира</option>
                                <option value="transport">Транспорт</option>
                            </Field>
                        </div>
                        <div><span> {values.favorite ? onSubmit(values)   : null }</span>
                        <span>
                      
                        </span>
                        </div>
                    </form>
                )}
            />
            
        </div>
    )
}
export default Statistic