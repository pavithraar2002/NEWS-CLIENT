import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import PrivateRoutes from './PrivateRoutes.jsx'

import {
  createBrowserRouter,RouterProvider
} from 'react-router-dom'
import SignupForm from './SignupForm.jsx'
import Newblog from './Newblog.jsx'
import Blogs from './Blogs.jsx'
import LoginForm from './Login.jsx'
import Trending from './Trending.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/home",
        element: <App/>,
      },
   
      {
        path: "/signup",
        element: <SignupForm/>,
      },
      {
        path: "/trending",
        element: <Trending/>,
      },
      {
        path: "/login",
        element: <LoginForm/>,
      },
      {
        path: "/new",
        element:
        (<PrivateRoutes>
           <Newblog/>
        </PrivateRoutes>)
       ,
      },
      {
        path:'/blogs',
        element:<Blogs />
      }


    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
