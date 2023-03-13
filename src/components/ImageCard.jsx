import React, { useEffect, useRef, useState } from 'react'

const ImageCard = ({image, setIsClicked, setSrc}) => {

    const[value, setValue] = useState(0)
    

    const ref = useRef()
    useEffect(() => {
        ref.current.addEventListener('load', setSpans);
    }, [])

    const setSpans = () => {
        const height = ref.current.clientHeight;
        const spans = Math.ceil(height / 11)
        setValue(spans);
    }

    const handleClick = (e) => {
        setSrc(e.target.src)
        setIsClicked(true)
    }

  return (
        <div className='image' key={image.id} style={{gridRowEnd: `span ${value}`}}>
            <img onClick={handleClick} ref={ref} src={image.largeImageURL} alt={image.user}/>
            <div className='content'>
                <p className='tag'>{image.tags}</p>
            </div>
        </div>
  )
}

export default ImageCard