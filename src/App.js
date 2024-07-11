/** ------------ IMPORTING COMPONENTS ------------ **/
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
/** ------------ IMPORTING PAGES ------------ **/
import Add from "./Pages/AddContact/add";
import Edit from "./Pages/EditContact/edit";
/** ------------ IMPORTING ROUTER ------------ **/
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
/** ------------ IMPORTING CUSTOM CONTEXT ------------ **/
import CustomContext from './Context/context';
/** ------------ IMPORTING TOAST DEPENDENCIES------------ **/
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {

  /** ------------ Creating Routes ------------ **/
  const router = createBrowserRouter([
    {path: '/', element: <Navbar/> ,
      children : [
        {path: '/', element: <Home/>},
        {path: '/add', element: <Add/>},
        {path: '/edit/:id', element: <Edit/>}
      ]}
  ]);

  return (
    <>
    <CustomContext>
      <ToastContainer />
      <RouterProvider router={router}/>
    </CustomContext>
    </>
  );
}



/** ------------ EXPORTING MODULES ------------ **/
export default App;
