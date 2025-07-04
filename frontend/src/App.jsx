import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BandSwipe from './components/BandSwipe'
import Profile from './components/Profile'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Swipe</Link> | <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BandSwipe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
