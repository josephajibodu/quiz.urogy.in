import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/landing/index.tsx'
import Layout from '@/components/layout.tsx'
import QuizPage from '@/pages/quiz/index.tsx'
import PlaylistPage from '@/pages/playlist/index.tsx'
import MainPlaylistPage from '@/pages/playlist/main.tsx'
import AdditionalResourcesPage from '@/pages/additional-resources/index.tsx'

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
