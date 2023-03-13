import React, { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Image from './components/Image'
import './App.css'
import ZoomImage from './components/ZoomImage'

const App = () => {
  const[list, setList] = useState([])
  const[isClicked, setIsClicked] = useState(false)
  const[src, setSrc] = useState('')

  return (
    <div className='container'>
    { isClicked===true && <ZoomImage setIsClicked={setIsClicked} src={src} /> }
      <Header />
      <SearchBar imageList={setList}/>
      <Image images={list} setIsClicked={setIsClicked} setSrc={setSrc} />
    </div>
  )
}

export default App