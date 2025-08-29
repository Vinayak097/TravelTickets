
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Tickets from './pages/Tickets'
import { Home } from './pages/Home'

function App() {
  
  

  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-500 to-blue-100 flex inset-0 justify-center">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tickets' element={<Tickets></Tickets>}></Route>
      </Routes>

      
      
    </div>
  )
}

export default App
