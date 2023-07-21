


import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";


// import { GoogleOAuthProvider } from '@react-oauth/google';

import routeObject from './route';
import reportWebVitals from './reportWebVitals';




const router = createBrowserRouter(routeObject);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="569553056609-ifbb1uv071bd4hp87mjcatvmlcca3pqk.apps.googleusercontent.com"> */}
        <RouterProvider router={router} />
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();