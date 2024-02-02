import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from './components/App/App';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from './theme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ChakraBaseProvider theme={theme}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
        </ChakraBaseProvider>    
      </PersistGate>
  </Provider>
);

//OK

