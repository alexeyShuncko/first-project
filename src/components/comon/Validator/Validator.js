//import React from 'react';

export const ValidatorRequired =(values)=> {
    if (values) {
        return undefined
    }
    return 'Введи символ'
}
export const maxLength = (maxLength) => (values) =>{
    if (values.length > 10) return `Много букв макимум ${maxLength}`
    return undefined
}