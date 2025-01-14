import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdoptionPage from './pages/AdoptionPage'
import PetDetailPage from './pages/PetDetailPage'
import Navbar from './components/Navbar/Navbar'
import { PetProvider } from './utilities/PetContext'
import Footer from './components/Navbar/Footer'

function App() {


  return (
    <PetProvider>
      <main className='w-[100vw] min-h-[100vh] flex justify-center items-start pt-[70px]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/adoption" element={<AdoptionPage />} />
          <Route path='/adoption/:id' element={<PetDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </PetProvider>
  )
}

export default App
