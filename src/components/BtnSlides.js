import React from 'react'
import SliderAction from '../utils/SliderAction'

const BtnSlides = ({ page, setPage, maxPage }) => {

    return (
        <div id="navigation" className="text-center">
            <button data-testid="button-restart" onClick={(x) => SliderAction(page, setPage, maxPage, x)} className={page === 0 ? 'hidden' : "small outlined"}>Reiniciar</button>
            <button data-testid="button-prev" onClick={(x) => SliderAction(page, setPage, maxPage, x)} className={page === 0 ? 'small disabled' : "small"}>Ant.</button>
            <button data-testid="button-next" onClick={(x) => SliderAction(page, setPage, maxPage, x)} className={maxPage === page ? 'small disabled' : "small"}>Sig.</button>
        </div>
    )
}

export default BtnSlides