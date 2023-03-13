import React from 'react'
import ImageCard from './ImageCard'

const Image = ({images, setIsClicked, setSrc}) => {

  return (
    <div className='images'>
        { images && images.map(image => (
            <ImageCard key={image.id} image={image} setIsClicked={setIsClicked} setSrc={setSrc}/>
        ))}
    </div>
  )
}

export default Image