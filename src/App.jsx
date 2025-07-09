import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
    <header>
      <NavBar />
    </header>
    <main>
      <Outlet />
    </main>

    <div>
        <footer>
          <Footer/>
        </footer>
    </div>
    </>
  )
}

export default App
