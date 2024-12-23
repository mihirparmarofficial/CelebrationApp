import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './src/redux/cartReducerNOTinUSE';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
