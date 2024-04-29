import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import AddTouristsSport from './Components/AddTouristsSport/AddTouristsSport';
import AllTourists from './Components/AllTourists/AllTourists';
import MyList from './Components/MyList/MyList';
import TouristsDetails from './Components/TouristsDetails/TouristsDetails';
import UpdateTouristsList from './Components/UpdateTouristsList/UpdateTouristsList';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/addTouristsSport')

      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/allTorists',
        element:<AllTourists></AllTourists>,
        loader: ()=>fetch('http://localhost:5000/addTouristsSport')
      },
      {
        path: '/addTouristsSport',
        element:<AddTouristsSport></AddTouristsSport>
      },
      {
        path: '/details/:id',
        element:<TouristsDetails></TouristsDetails>,
        
      },
      {
        path: '/myList',
        element: <MyList></MyList>

      },
       {
        path: '/updateList/:id',
        element: <UpdateTouristsList></UpdateTouristsList>,
        // loader:({params})=>fetch(`http://localhost:5000/myList/${params._id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
