import React from 'react'
import { connect } from 'react-redux' 
import { setThumbnail, selectFile } from '../actions'
import * as config from '../config'
import '../build/css/MP4Thumbnail.css'

const CANVAS      = 'canvas' 
const VIDEO       = 'video'
const LOADED_DATA = 'loadeddata'
const DIM2        = '2d'
const JPEG        = 'image/jpeg'

const WIDTH       = config.thumbnail.width
const HEIGHT      = config.thumbnail.height

const css = {
  mp4Thumbnail: 'mp4-thumbnail',
  mp4ThumbnailChecked: 'mp4-thumbnail-checked'
}

class NaiveMP4Thumbnail extends React.Component {
  componentWillMount() {
    var canvas = document
      .createElement(CANVAS)
    var video = document
      .createElement(VIDEO)

    video.src = URL
      .createObjectURL(this.props.file.blob)

    const onDrawImage = this.props.onDrawImage 
    video.addEventListener(LOADED_DATA, () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      canvas 
        .getContext(DIM2)
        .drawImage(video, 0, 0)

      this._canvas = canvas
      this._video = video

      video.currentTime = 0 
      onDrawImage(canvas
        .toDataURL(JPEG))
    })
  }

  render() {
    const src = this.props.file.thumbnail
    const checked = this.props.checked
    const className = checked ?
      css.mp4ThumbnailChecked :
      css.mp4Thumbnail
    const onClick = this.props.onClick
    return <img role='presentation'
      src={src} 
      className={className}
      width={WIDTH} 
      height={HEIGHT}
      onClick={onClick}/>
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.file.id
  return {
    onDrawImage: url => 
      dispatch(setThumbnail(id,
        url)),
    onClick: () => 
      dispatch(selectFile(id))
  }
}

export default connect(null,
  mapDispatchToProps)(NaiveMP4Thumbnail)
