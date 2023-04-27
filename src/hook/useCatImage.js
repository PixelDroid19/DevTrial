import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    const [error, setError] = useState({ isError: false, message: "" });
    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact?.fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            }).catch((err) => {
                setError({ isError: true, message: err.message });
                console.log(error)
            })
    }, [fact])


    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}