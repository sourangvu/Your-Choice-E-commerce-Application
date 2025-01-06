import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import { Router } from "./router/router";
import './App.css';

function App (){

  return (
    <>
    <RouterProvider router = { Router  }/>

     <Toaster/>
     

    

    </>
  )
}

export default App
