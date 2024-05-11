import {SlideProvide} from '../../Context/index'
import { useRoutes } from 'react-router-dom'
import { HashRouter as Router} from 'react-router-dom';

import './App.css'
import Home from '../Home'
import Coupon from '../Coupon'
import Navbar from '../../Components/Navbar'
import NotFound from '../NotFound'
import MusicPlayer from '../MusicPlayer'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/mom_day', element: <Home/> },
    { path: '/mom_day/cupones', element: <Coupon /> },
    { path: '/mom_day/music', element: <MusicPlayer /> },
    { path: '/mom_day/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <SlideProvide>
      <Router>
        <AppRoutes />
        <Navbar/>
      </Router>
    </SlideProvide>
  )
}

export default App
