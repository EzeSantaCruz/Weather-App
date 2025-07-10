import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import WeatherPage from './pages/WeatherPage.jsx'
import MarinePage from './pages/MarinePage.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        index:true,
        element: <WeatherPage />
      },
      {
        path: "/marine",
        element: <MarinePage />
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
