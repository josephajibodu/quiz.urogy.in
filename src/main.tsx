import ReactDOM from 'react-dom/client'
import '@/index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from '@/pages/landing'
import Layout from '@/pages/layout'
import QuizPage from '@/pages/quiz'
import PlaylistPage from '@/pages/playlist'
import AdditionalResourcesPage from '@/pages/additional-resources'
import routes from './utils/routes'
import { Toaster } from 'react-hot-toast'
import Error from './pages/error'
import RootLoader from './pages/loader'

const router = createBrowserRouter([
  {
    element: <Layout />,
    ErrorBoundary: Error,
    loader: RootLoader,
    children: [
      {
        path: routes.LANDING_PAGE,
        element: <HomePage />,
        loader: HomePage.loader
      },
      {
        path: routes.QUIZ,
        element: <QuizPage />,
        action: QuizPage.action,
        loader: QuizPage.loader,
      },
      {
        path: routes.PERSONALIZED_PLAYLIST,
        element: <PlaylistPage />,
        loader: PlaylistPage.loader,
        ErrorBoundary: PlaylistPage.error,
        action: PlaylistPage.action
      },
      {
        path: routes.ADDITIONAL_RESOURCES,
        element: <AdditionalResourcesPage />,
      }
    ]
  }
])

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
    <Toaster toastOptions={{ 
      position: 'bottom-center',
      style: {
        border: '2px solid #2F88FF',
        color: '#00286B',
        borderRadius: '24px',
        fontFamily: 'monospace'
      }
     }} />
  </>,
)
