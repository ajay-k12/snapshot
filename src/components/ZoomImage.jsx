import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'

const ZoomImage = ({setIsClicked, src}) => {
  return (
    <div className='zoom-image'>
        <div className='x-button'><RxCrossCircled className='cross-button' onClick={() => setIsClicked(false)} /></div>
        <div className='after-zoom'>
            <img src={src} alt='tree' />
        </div>
    </div>
  )
}

export default ZoomImage