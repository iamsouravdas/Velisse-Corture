import axios from 'axios'
import './App.css'
import RouteNavigator from './routes/RouteNavigator'
import { useEffect, useState } from 'react'

function App() {

  const[data, setData] = useState([])

  useEffect(()=> {

    axios.get('http://localhost:3030/api/urban-cart/products/getProductList').then((res)=> setData(res.data.data) )
  }, [])

  console.log(data);



  return (
    <>
      {/* <Login /> */}

   {
    data?.map((element: any)=> {
      return <img src={element.main_image_url} alt="image name"/>
    })
   }
      <RouteNavigator />

    </>
  )
}

export default App
