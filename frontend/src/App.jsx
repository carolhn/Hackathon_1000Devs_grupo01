import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import './App.css'
import { Footer } from './components/Footer'
import { Patients } from './pages/Patients'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Patients />} path="/pacientes/*" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App