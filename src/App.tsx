import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='bg-secondary h-screen'>
        <Topbar/>
        <Sidebar/>
      </div>
      <Footer/>
    </>
  )
}

export default App
