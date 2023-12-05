import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/landing/index.tsx'
import Layout from './components/layout.tsx'
import QuizPage from './pages/quiz/index.tsx'
import PlaylistPage from './pages/playlist/index.tsx'
import MainPlaylistPage from './pages/playlist/main.tsx'

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
      },
      {
        path: '/generating-playlist',
        Component: PlaylistPage,
      },
      {
        path: '/personalized-playlist',
        Component: MainPlaylistPage,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
