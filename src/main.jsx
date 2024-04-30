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
import CountryData from './Components/CountryData/CountryData';
import Country from './Components/Country/Country';
import AllCountry from './Components/AllCountry/AllCountry';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import ProtectedRoute from './Components/ProtectedRouted/ProtectedRoute';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('https://rest-travel-r4qd43gm2-rebekas-projects-68bf097b.vercel.app/addTouristsSport')

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
        loader: ()=>fetch('https://rest-travel-r4qd43gm2-rebekas-projects-68bf097b.vercel.app/addTouristsSport')
      },

      {
        path: '/addTouristsSport',
        element:(<ProtectedRoute>
          <AddTouristsSport></AddTouristsSport>
        </ProtectedRoute>)
      },

      {
        path: '/details/:id',
        element:<TouristsDetails></TouristsDetails>,
        
      },

      {
        path: '/myList',
        element:(<ProtectedRoute>
           <MyList></MyList>
        </ProtectedRoute>)

      },

       {
        path: '/updateList/:id',
        element: <UpdateTouristsList></UpdateTouristsList>,
        
      },

      {
        path:'/country',
        element:<Country></Country>
      },
      {
        path: '/allCountry',
        element:<AllCountry></AllCountry>,
        loader: ()=>fetch('https://rest-travel-r4qd43gm2-rebekas-projects-68bf097b.vercel.app/country')
      },

      {
        path:'/countryData',
        element:<CountryData></CountryData>

      }, 
      {
        path: '/countryDetails',
        element:<CountryDetails></CountryDetails>,
       
      },
     

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
