import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contect from './pages/contect/Contect.jsx'
import Users from './pages/users/Users.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx'
import Posts from './components/posts/Posts.jsx'
import PostDetails from './components/postDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
    
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contect',
        element:<Contect/>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users/>
      },
      {
        path: '/user/:userID',
        loader:  ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails/>
      },
      {
        path: '/posts',
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts/>
      },
      {
        path: '/post/:postID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        element: <PostDetails/>
      }
    ]


  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
