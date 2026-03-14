import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import Testimonials from './pages/Testimonials'
import ApplicationDetails from './pages/ApplicationDetails'
import FAQPage from './faq/FAQ'
import ContactPage from './contact/ContactPage'
import TeamPage from './team/TeamPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/join-us" element={<ApplicationDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  )
}

export default App