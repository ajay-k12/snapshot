import React, {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import axios from 'axios'



const SearchBar = ({imageList}) => {
  const [item, setItem] = useState('')  
  const key = '33872360-93e5d20d250213a5696a5c41e'
  const url = `https://pixabay.com/api/?key=${key}&q=${item}&image_type=photo&safesearch=false`


  const fetchAPI = () => {
    axios.get(url)
    .then((response) => {
      imageList(response.data.hits);
    })
    .catch((error) => console.log(error))
    setItem('')
  }


  const changeSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='search-bar'>
        <form onSubmit={changeSubmit}>
            <input onChange={(e) => setItem(e.target.value)} 
              className='input' 
              type='text' 
              placeholder='Search' 
              value={item}
            />
            <button onClick={fetchAPI}>
                <BsSearch 
                    size={20}
                    color='white'
                    className='bs-button'
                />
            </button>
        </form>
    </div>
  )
}

export default SearchBar