import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUpForm from './components/signUpForm/SignUpForm.jsx'
import Login from './components/login/Login.jsx'
import LadingPage from './Pages/LadingPage.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/Login",
    element: <Login/>
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
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
