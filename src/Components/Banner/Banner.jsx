import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/costants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie,setMovie] =useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data)
      const randomIndex=Math.floor(Math.random() * response.data.results.length);
      const randomMovie = response.data.results[randomIndex];
      setMovie(randomMovie);
    })
  
    
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? (movie.name||movie.title):""}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>mylist</button>

            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner