import { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom"
import { Router } from "./Router/Router";
import './App.css';

function App (){

  return (
    <>
    <RouterProvider Router = { Router  }/>

     <Toaster/>
     

    

    </>
  )
}

export default App
