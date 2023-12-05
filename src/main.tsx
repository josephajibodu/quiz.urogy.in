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
import routes from './utils/routes'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.LANDING_PAGE,
        element: <HomePage />,
      },
      {
        path: routes.QUIZ,
        element: <QuizPage />,
      },
      {
        path: routes.LOADING_PLAYLIST,
        element: <PlaylistPage />,
      },
      {
        path: routes.PERSONALIZED_PLAYLIST,
        element: <MainPlaylistPage />,
      },
      {
        path: routes.ADDITIONAL_RESOURCES,
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
