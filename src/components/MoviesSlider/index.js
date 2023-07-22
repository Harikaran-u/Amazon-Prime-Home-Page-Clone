import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {Movies} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  const slideShow = (
    <Slider {...settings}>
      {Movies.map(eachItem => (
        <MovieItem key={eachItem.id} movie={eachItem} />
      ))}
    </Slider>
  )
  return slideShow
}

export default MoviesSlider
