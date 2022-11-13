import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import ApplicationProvider from "./Context/ContextApplication"
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import ApplicationProvider from './Context/ContextApplication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< ChakraProvider>
  <BrowserRouter>
  <ApplicationProvider>
       <App />
  </ApplicationProvider>
  </BrowserRouter>
</ChakraProvider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
