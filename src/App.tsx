import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Wheel from './Components/Wheel/Wheel'
import DailyGoal from './Components/DailyGoal/DailyGoal' // Nhớ import component mới

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Wheel Game</Link>
          </li>
          <li>
            <Link to="/daily-goal">Daily Goal</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Wheel />} />
          <Route path="/daily-goal" element={<DailyGoal />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App