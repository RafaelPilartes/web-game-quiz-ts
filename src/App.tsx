import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { QuizContextProvider } from './context/quizContext'
import { AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <AppProvider>
      <QuizContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QuizContextProvider>
    </AppProvider>
  )
}

export default App
