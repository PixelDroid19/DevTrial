import React from 'react'
import { useFetch } from '../hook/useFetch'
import { useCatImage } from '../hook/useCatImage'
import { Spinner } from './spinner'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'


export const ViewCat = () => {
    const {
        loading: factLoading,
        data: fact,
        error: errorFact,
        handleRefetch
    } = useFetch(CAT_ENDPOINT_RANDOM_FACT)

    const { imageUrl, loading } = useCatImage({ fact })



    if (errorFact) return <div className='content_slides'>Error</div>
    if (factLoading) return <div className='content_slides'>Loading</div>

    return (
        <div className='content_slides'>

            <div id='navigation' className='text-center'>
                <button
                    onClick={handleRefetch}
                    data-testid='button-prev'
                    className='small '
                >
                 {loading ? <Spinner /> : 'Get new fact'}
                </button>
            </div>

            <div id='slide' className='card text-center card2'>
                {imageUrl && fact && <img className='Cat-img ' src={imageUrl} alt={`Image extracted using the first rhee words for ${fact?.fact}`} />}
            </div>
        </div>
    )
}
