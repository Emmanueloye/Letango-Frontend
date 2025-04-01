import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import dashbordReducer from '../Actions/DashboardAction';

const store = configureStore({
  reducer: {
    ui: dashbordReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
