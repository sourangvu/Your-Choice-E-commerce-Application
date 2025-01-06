import { Toaster } from "react-hot-toast"
import { Router } from "./router/Router"
import { RouterProvider } from "react-router-dom"
import './App.css';


function App (){

  return (
    <>
    <RouterProvider router = { Router }/>

     <Toaster/>
     

    

    </>
  )
}

export default App
