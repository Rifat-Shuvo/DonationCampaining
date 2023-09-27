import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import Donatecard from './Components/Donatecard.jsx'
import Donationspage from './Components/Donationspage.jsx'
import Piecharts from './Components/Piecharts.jsx'
import Statistics from './Components/Statistics.jsx'
import Error from './Components/Error.jsx'
const route = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/donation.json')
      },
      {
        path : "/donations",
        element:<Donationspage></Donationspage>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/donate/:id",
        element:<Donatecard></Donatecard>,
        loader: ()=>fetch('/donation.json')
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
