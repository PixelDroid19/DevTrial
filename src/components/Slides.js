import React, { useEffect, useState } from 'react';
import SliderAction from '../utils/SliderAction';
import BtnSlides from './BtnSlides';

function Slides({ dataSlides }) {
    const [page, setPage] = useState(0)
    const [maxPage, setMaxpage] = useState(0)


    useEffect(() => {
        if (dataSlides) setMaxpage(dataSlides.length - 1)
    }, [dataSlides])



    if (!dataSlides) return <div id="slide" className="card text-center card2"><>No hay datos</></div>

    return (
        <div className='content_slides'>
            <BtnSlides maxPage={maxPage} setPage={setPage} page={page} />

            <div id="slide" className="card text-center card2">
                <h1 data-testid="title">{dataSlides[page]?.title}</h1>
                <p data-testid="text">{dataSlides[page]?.text}</p>
            </div>
        </div>
    );

}

export default Slides;
