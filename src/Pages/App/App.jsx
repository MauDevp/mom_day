import {SlideProvide} from '../../Context/index'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from '../Home'
import Coupon from '../Coupon'
import Navbar from '../../Components/Navbar'
import NotFound from '../NotFound'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/cupones', element: <Coupon /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <SlideProvide>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
      </BrowserRouter>
    </SlideProvide>
  )
}

export default App
