import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  const amazon = (
    <div className="prime-home-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-banner"
      />
      <div className="movies-list-cont">
        <h1 className="genre">Action Movies</h1>
        <div className="slider-cont">
          <MoviesSlider Movies={actionMovies} />
        </div>
        <h1 className="genre">Comedy Movies</h1>
        <div className="slider-cont">
          <MoviesSlider Movies={comedyMovies} />
        </div>
      </div>
    </div>
  )

  return amazon
}

export default PrimeVideo
