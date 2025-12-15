import Testing from './components/testing'
import './index.css'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
