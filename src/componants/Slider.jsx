import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../sevices/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://images.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;


const Slider = () => {

  const [movieList, setMoviesList] = useState([]);
  const elementRef = useRef();





  useEffect(() => {
    getTrendingMovies();
  }, []);



  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideo.then((resp) => {
      console.log(resp.data.results);
      setMoviesList(resp.data.results);
    });
  };







  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 125;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 125;
  };





  return (
    <>



      <HiChevronLeft
        className="hidden lg:block text-white text-[30px] absolute mx-8 mt-[150px] lg:mt-[200px]  cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      ></HiChevronLeft>






      <HiChevronRight
        className="hidden lg:block text-white text-[30px] absolute mx-8 mt-[150px] lg:mt-[200px] cursor-pointer right-0 "
        onClick={() => sliderRight(elementRef.current)}
      ></HiChevronRight>




      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth "
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] lg:h-[400px] object-cover object-center 
        mr-5 rounded-md hover:border-[4px] border-grey-400 transition-all duration-100 ease-in"
          ></img>
        ))}
      </div>







    </>
  );















};
export default Slider;
