import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./reducers/header-reducer";
import infoReducer from "./reducers/info-reducer";

const store = configureStore({
    reducer: {
        info: infoReducer,
        header: headerReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;