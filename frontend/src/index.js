import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import App from './App';
import {configureStore,} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productReducer, { productsFetch }  from './features/productSlice';
import { productApi } from './features/productApi';
import cartReducer, { getTotals } from './features/cartSlice';


const store= configureStore({
reducer: {

products:productReducer,
cart:cartReducer,
[productApi.reducerPath]:productApi.reducer,
},
middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(productApi.middleware )

});

store.dispatch(productsFetch())
store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>

    <App />
 

  </Provider>
  </React.StrictMode>
);

