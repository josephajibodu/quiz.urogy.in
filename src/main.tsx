import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/landing/index.tsx'
import Layout from './components/layout.tsx'
import QuizPage from './pages/quiz/index.tsx'

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/quiz',
        Component: QuizPage,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
