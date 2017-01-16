import React from 'react'
import { connect } from 'react-redux'
import { addFile } from '../actions'

const NaiveFileInput = ({onChange}) => (
  <div>
    <input type="file"
      id="fileInput"
      onChange={onChange}/>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onChange: () => {
      const fileInput = document
        .getElementById("fileInput")
      const file = fileInput.files[0]
      dispatch(addFile(file))
    }
  }
}

export default connect(null,
  mapDispatchToProps)(NaiveFileInput)

