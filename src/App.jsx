import Header from './componants/Header'
import Slider from './componants/Slider'
import ProductionHouse from './componants/ProductionHouse'
import GenreMovieList from './componants/GenreMovieList'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();


function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </>
  )
}

export default App
