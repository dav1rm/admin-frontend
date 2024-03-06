import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/index.tsx'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>,
)
