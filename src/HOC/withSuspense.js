import React, { Suspense } from 'react'


export const withSuspense = (Component) => {

    return (props) =>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Component {...props} />
        </Suspense>
}



