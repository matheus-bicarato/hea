import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/router/Home.jsx'
import Error from './components/router/Error-page.jsx'
import SaudeBemEstar from './components/router/Saude-BemEstar.jsx'
import Beleza from './components/router/Beleza.jsx'
import Cadastro from './components/router/Cadastro.jsx'
import Cuidados_diarios from './components/router/Cuidados-diarios.jsx'
import Generico from './components/router/Generico.jsx'
import Infantil from './components/router/Infantil.jsx'
import Medicamentos from './components/router/Medicamentos.jsx'

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
      {
        path: "/Cuidados_diarios",
        element: <Cuidados_diarios />
      },
      {
        path: "/Generico",
        element: <Generico />
      },
      {
        path: "/Infantil",
        element: <Infantil />
      },
      {
        path: "/Medicamentos",
        element: <Medicamentos />
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
