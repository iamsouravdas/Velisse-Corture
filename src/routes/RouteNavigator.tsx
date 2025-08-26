import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/App/Layout'
import Home from '../modules/home/Home'

const RouteNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default RouteNavigator