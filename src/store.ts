import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/header-reducer";
import api from "./app/api/index";

const store = configureStore({
    reducer: {
        header: headerReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;