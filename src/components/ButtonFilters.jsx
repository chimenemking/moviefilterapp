import React, { useContext, useState } from 'react'
import { MovieContext } from '../App'
import { genres } from './Untils'

export const ButtonFilters = () => {

  const[tabActive, setTabActive]= useState(0)
  
  const { popularMovies,setFilteredMovie}=useContext(MovieContext);

  const handleClickFilter=(id)=>{
     setTabActive(id)
     const filteredMovie=popularMovies.filter(movie=>movie.genre_ids.includes(id))
     console.log(filteredMovie)
     if (id===0){
      setFilteredMovie(popularMovies)
     }else{
      setFilteredMovie(filteredMovie)
     }
  }
  return (
    <div className='button-wrapper'>
      {genres.map(item=>(
      <button
      className={tabActive===item.id? "active":undefined}
       key={item.id}
       onClick={()=>handleClickFilter(item.id)}
       >
       {item.name}</button>
      ))}
    </div>
  )
}
