import './App.css';

import AppRoutes from './routers/AppRoutes';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './dominio/store'


function App() {
 
  return (
     <Provider store={store}>
        <AppRoutes />      
      </Provider>
  );
}

export default App;
