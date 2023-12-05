import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/landing/index'
import Layout from '@/components/layout'
import QuizPage from '@/pages/quiz/index'
import PlaylistPage from '@/pages/playlist/index'
import MainPlaylistPage from '@/pages/playlist/main'
import AdditionalResourcesPage from '@/pages/additional-resources/index'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/quiz',
        element: <QuizPage />,
      },
      {
        path: '/generating-playlist',
        element: <PlaylistPage />,
      },
      {
        path: '/personalized-playlist',
        element: <MainPlaylistPage />,
      },
      {
        path: '/additional-resources',
        element: <AdditionalResourcesPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
