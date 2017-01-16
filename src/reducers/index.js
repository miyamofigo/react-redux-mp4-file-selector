import * as actions from '../actions'
import { genKey } from '../utils'

export const files = (state=[], action) => {
  switch (action.type) {
  case actions.ADD_FILE:
    return [
      ...state,
      { 
        id: genKey(),
        blob: action.file,
        thumbnail: ""
      }
    ]
  case actions.SET_THUMBNAIL:
    return state
      .map(file => { 
        if (file.id === action.id) {
          return Object
            .assign({}, file, {
              thumbnail: action.url
            })
        } else {
          return file
        }
      })
  default:
    return state
  }
}

export const checked = (state=-1, action) => {
  switch (action.type) {
  case actions.SELECT_FILE:
    return action.id
  default: 
    return state
  }
}
