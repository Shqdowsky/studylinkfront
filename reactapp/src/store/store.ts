import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { postApi } from "../service/PostService";


const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];