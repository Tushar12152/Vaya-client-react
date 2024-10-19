import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import Authprovider from './Components/AuthProvider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
        <RouterProvider router={Router}></RouterProvider>
      </Authprovider>
  </React.StrictMode>,
)
