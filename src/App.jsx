import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router'
import NewPassword from './pages/NewPassword'
import ForgotPassword from './pages/ForgotPassword'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/new-password" element={<NewPassword />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
