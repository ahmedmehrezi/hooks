import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import { Data } from './Data';

import Trailer from './components/Trailer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [movies,setMovies]=useState(Data)
  const addMovie =(movie)=>{
    setMovies([...movies,movie])
  }
  const deleteMovie = (id)=>{
    setMovies(movies.filter((movie)=> movie.id !== id))
  }


  return (
    <div className="App">
      
        {/* <MovieList movies={movies} deleteMovie={deleteMovie} addMovie={addMovie}/> */}
        <Routes>
          <Route exact path='/trailer' element={<Trailer/>} />
        </Routes>  
      

    </div>
  );
}

export default App;