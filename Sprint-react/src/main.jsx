import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/router/Home.jsx'
import Error from './components/router/Error-page.jsx'
import SaudeBemEstar from './components/router/Saude-BemEstar.jsx'
import Beleza from './components/router/Beleza.jsx'
import Cadastro from './components/router/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/SaudeBemEstar",
        element: <SaudeBemEstar />
      },
      {
        path: "/Beleza",
        element: <Beleza />
      },
      {
        path: "/Cadastro",
        element: <Cadastro />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
