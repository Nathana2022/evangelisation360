import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpForm from './components/signUpForm/SignUpForm.jsx'
import LadingPage from './Pages/LadingPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/SignUpForm",
    element: <SignUpForm/>
  },
  {
    path:"/ladingPage",
    element:<LadingPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
