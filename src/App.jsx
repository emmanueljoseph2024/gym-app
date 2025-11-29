import About from './aboutpage/about.jsx'
import Homepage from './homepage.jsx'
import Reserve from './reservepage/Reserve.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const route = createBrowserRouter([
    {path: '/', element: <Homepage />},
    {path: '/about', element: <About />},
    {path: '/reserve', element: <Reserve />},

    
  ])
  return (
    <>
       <RouterProvider router={route} />
    </>
  )
}

export default App
