import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  )
}

export default App