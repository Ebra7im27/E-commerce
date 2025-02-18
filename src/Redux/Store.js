import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './Reducer';

const store = configureStore({
    reducer: rootReducers,
});

export default store;