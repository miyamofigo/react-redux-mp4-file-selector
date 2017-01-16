import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { MP4FileInput, 
  MP4FileSelector, 
  MP4FileSelectorReducers } from 'mp4-file-selector'

const files = MP4FileSelectorReducers.files
const checked = MP4FileSelectorReducers.checked

let store = createStore(combineReducers({
  files,
  checked
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MP4FileInput/>
      <MP4FileSelector/>
    </div>
  </Provider>,
  document.getElementById('root')
)
