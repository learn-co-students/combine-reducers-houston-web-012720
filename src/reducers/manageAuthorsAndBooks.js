import uuid from "uuid"

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  authors: authorsReducer, 
  books: booksReducer 
})

export default rootReducer 

function authorsReducer(state = [], action){
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state,action.author]

    case "REMOVE_AUTHOR":
      state.splice(state.indexOf(action.author),1)
      return state
    
    case "ADD_BOOK": 
      let existingAuthor = state.filter(author => author.authorName === action.book.authorName)
      return existingAuthor.length > 0 ? state : [...state, {authorName: action.book.authorName, id: uuid()}]
  
    default:
      return state
  }
}

function booksReducer(state = [], action){
  switch (action.type) {
    case "ADD_BOOK":
      return [...state,action.book]
    
    case "REMOVE_BOOK": 
      state.splice(state.indexOf(action.book),1)
      return state
  
    default:
      return state
  }
}