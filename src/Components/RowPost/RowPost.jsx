import React, { useState } from 'react'
import './RowPost.css'
import { useEffect } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/costants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies]=useState([])
    const [urlid,setUrlid]=useState()
    useEffect(()=>{
        axios.get(props.url).then(response=>{
        
            setMovies(response.data.results)
        })
        // .catch(err=>{
        //     alert("error occure")
        // })

    })
    //Youtube realated css
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            // console.log(response.data)
            
            if(response.data.results.lenght!==0){
                setUrlid(response.data.results[0])
            }else{
                console.log("Array Emp")
            }
        })

      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((movie)=>
            // <p>{movie.name||movie.title}</p>
            <>
            <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt={movie.name || movie.title} />
            <div className="posterTitle">{movie.name || movie.title}</div>


            </>
            )}
            
        </div>
        

        { urlid && <Youtube opts={opts} videoId={urlid.key}></Youtube>}
       

    </div>
  )
}

export default RowPost