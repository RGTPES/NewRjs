import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from "../slices/CounterSlice"
import TaskSlice from "../slices/Task.slices"
import  RandomSlice  from '../slices/Randome.slices'
import DarkLightReducer from "../slices/DarkLight";
import viewModeReducer from '../slices/Ex4.slices'
import menuReducer from "../slices/menuSlice";
import LanguageSelector from '../slices/language.slice';
import favoritesReducer from "../slices/favoritesSlice"
const store = configureStore({
  reducer: { 
    counter: CounterSlice,
    task:TaskSlice,
    random:RandomSlice,
    DarkLight:DarkLightReducer,
    viewMode:viewModeReducer,
    menu: menuReducer,
    language:LanguageSelector,
    favorites:favoritesReducer,
  },  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store