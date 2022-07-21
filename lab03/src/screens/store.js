import { configureStore } from '@reduxjs/toolkit'

// Redux store is a single source of truth for the application state
//Note: we can still combine react useState and redux store, in case we have,
// that we dont have share and that is managed bt component itself, we can simple useState
//1. we need to create thar store
// 2. 
export default configureStore({
  reducer: {},
})