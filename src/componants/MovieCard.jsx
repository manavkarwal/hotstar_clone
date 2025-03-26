import React from 'react'
const IMAGE_BASE_URL = "https://images.tmdb.org/t/p/original";



const MovieCard = ({movie}) => {
  return (
    <>
         <img src={IMAGE_BASE_URL+movie.poster_path}
         className='w-[140px] lg:w-[200px] rounded-lg hover:border-[3px] border-grey-400 hover:scale-110
         transition-all duration-150 ease-in cursor-pointer '
         />
    </>
  )
}

export default MovieCard