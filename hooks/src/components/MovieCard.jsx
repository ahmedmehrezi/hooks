import React from 'react'
import './components.css'
import Rating from 'react-star-rating-lite';
import { Link } from 'react-router-dom';

export default function MovieCard({movie ,deleteMovie}) {
  
  
  return (
      
      <div className='box1'>
            <h1>{movie.title}</h1>
            <h1>{movie.description}</h1>
            <img style={{width:"200px"}} src={movie.posterUrl} alt="" />
            <h1>{movie.rate}</h1>
            <button onClick={()=>deleteMovie(movie.id)} >remove card</button>
            <Rating value={movie.rate} readonly />
            <button><Link rel="stylesheet" href='/trailer'/>Trailer</button>
 
    </div>
    
  )
}
