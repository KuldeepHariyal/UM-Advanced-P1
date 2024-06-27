import './App.css'
import Navbar from './components/navbar/navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='nav-bar'>
       <Navbar/>
       <Routes>
        <Route path='/' element ={<Home/>}/>
       </Routes>
    </div>
  )
}

export default App
