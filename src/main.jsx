import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import Authprovider from './Components/AuthProvider/Authprovider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Authprovider>
        <RouterProvider router={Router}></RouterProvider>
        <Toaster/>
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
