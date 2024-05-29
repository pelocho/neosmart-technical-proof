import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <>
      <div className='bg-secondary h-screen'>
        <Topbar />
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </>
  )
}

export default App
