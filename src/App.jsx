import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './assets/style/main.css'
import { Index } from './pages/Index'
import { Login } from './pages/Login'

export function App() {
  return (
    <Router>
      <section>
        <Routes>
          <Route element={<Index />} path="/" />
          <Route element={<Login />} path="/login" />

        </Routes>
      </section>
    </Router>
  )
}

