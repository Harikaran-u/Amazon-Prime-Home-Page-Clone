import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  const popupVideo = (
    <Popup
      modal
      trigger={
        <li className="thumbnail-list">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </li>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size={20} />
          </button>
          <div>
            <ReactPlayer url={videoUrl} controls />
          </div>
        </>
      )}
    </Popup>
  )

  return popupVideo
}

export default MovieItem
