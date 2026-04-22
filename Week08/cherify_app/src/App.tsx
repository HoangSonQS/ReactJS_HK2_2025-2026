import { useRecoilValue } from 'recoil'
import { currentPageState } from './state/atoms'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeBox from './pages/RecipeBox'
import SearchResults from './pages/SearchResults'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import { IngredientsPage, OccasionsPage, AboutUsPage } from './pages/Placeholders'
import AuthModal from './components/Modals/AuthModal'
import DiscoverModal from './components/Modals/DiscoverModal'
import './App.css'

function App() {
  const currentPage = useRecoilValue(currentPageState)

  return (
    <div className="app-container">
      <Header />
      
      <div className="main-viewport">
        {currentPage === 'RecipeBox' && <RecipeBox />}
        {currentPage === 'SearchResults' && <SearchResults />}
        {currentPage === 'Login' && <Login />}
        {currentPage === 'Signup' && <Signup />}
        {currentPage === 'Dashboard' && <Dashboard />}
        {currentPage === 'Ingredients' && <IngredientsPage />}
        {currentPage === 'Occasions' && <OccasionsPage />}
        {currentPage === 'AboutUs' && <AboutUsPage />}
        {['OurCooks', 'Features', 'FAQ', 'GiftSubscription', 'Feedback'].includes(currentPage) && <AboutUsPage />}
      </div>

      <Footer />

      {/* Global Modals */}
      <AuthModal />
      <DiscoverModal />

      <style>{`
        .app-shell {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-viewport {
          flex: 1;
        }
      `}</style>
    </div>
  )
}

export default App
