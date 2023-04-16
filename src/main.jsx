import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from "./styles/global"
import { ThemeProvider} from "styled-components"
import theme from './styles/theme'

import { Routes } from "./routes"
import { AuthProvider } from './hooks/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
  </ThemeProvider>
  </React.StrictMode>
)
