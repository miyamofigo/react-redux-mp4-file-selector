import FileInput from './modules/FileInput'
import MP4Selector from './modules/MP4Selector'
import { files, checked } from './reducers'

export const MP4FileInput = FileInput  // for test use
export const MP4FileSelector = MP4Selector 

export const MP4FileSelectorReducers = { 
  files, 
  checked 
} 

