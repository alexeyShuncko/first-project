import React, { useState } from 'react'
import s from './paginator.module.css'
import arrowRight from '../../../Asos/Images/arrowRight.png'
import arrowLeft from '../../../Asos/Images/arrowLeft.png'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionsize = 25 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionsize)

    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionsize))

    let leftPortionPageNumber = (portionNumber - 1) * portionsize + 1
    let rightPortionPageNumber = portionNumber * portionsize


    return <div className={s.paginator}>

        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
                <img alt=''
                    src={arrowLeft}
                ></img></button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p}
                    className={currentPage === p
                        ? s.selectPage
                        : null}
                    onClick={() => {
                        onPageChanged(p)
                    }}> {p} </span>

            })}


        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>
                <img alt=''
                    src={arrowRight}
                ></img>
            </button>}

    </div>
}

export default Paginator