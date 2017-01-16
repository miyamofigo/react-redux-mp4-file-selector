import React from 'react'
import { connect } from 'react-redux'
import { isMP4 } from '../utils'
import MP4Thumbnail from '../modules/MP4Thumbnail'
import * as config from '../config'
import '../build/css/MP4Selector.css'

const css = {
  invisible: 'invisible-display',
  mp4Input: 'mp4-input',
  mp4Selector: 'mp4-selector'
}

const MP4InputLabel = ({file, checked}) => (
  <label>
    <MP4Thumbnail file={file}
      checked={checked}/>  
  </label>
)

const MP4Input = ({value, name, checked, file}) => (
  <div className={css.mp4Input}
    style={config.input}>
    <input type="radio" 
      value={value} 
      name={name} 
      checked={checked}
      className={css.invisible}/>
    <MP4InputLabel file={file}
      checked={checked}/>
    <div>{file.blob.name}</div>
  </div>
)

const NaiveMP4Selector = ({files, checked}) => (
  <div className={css.mp4Selector}>
    { files
      .filter(file => 
        isMP4(file.blob.name))
      .map(file => 
        <MP4Input key={file.id} 
          file={file}
          checked={file.id === checked}/>) } 
  </div>
)

const mapStateToProps = state => {
  return {
    files: state.files,
    checked: state.checked
  }
}

export default connect(mapStateToProps,
  null)(NaiveMP4Selector)

