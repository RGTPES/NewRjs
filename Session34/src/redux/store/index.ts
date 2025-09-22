import { configureStore } from '@reduxjs/toolkit'

import StudentForm from '../reducer/StudentForm.Reducer'
// ...

const store = configureStore({
  reducer: {
 Form: StudentForm

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store