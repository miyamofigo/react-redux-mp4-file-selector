export const ADD_FILE = 'ADD_FILE'
export const SET_THUMBNAIL = 'SET_THUMBNAIL'
export const SELECT_FILE = 'SELECT_FILE'

export const addFile = file => {
  return {
    type: ADD_FILE,
    file
  }
}

export const setThumbnail = (id, url) => {
  return {
    type: SET_THUMBNAIL,
    id,
    url
  }
} 

export const selectFile = id => {
  return {
    type: SELECT_FILE,
    id
  }
}
