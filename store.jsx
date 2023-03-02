import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/mainReducer";

const store = configureStore({ reducer: reducers });

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = typeof store.getState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = typeof store.dispatch;

export default store;
