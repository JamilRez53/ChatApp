import React from 'react'
import Messenger from './Messenger/Messenger'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
const App = () => {
  return (
    <Router>
     <div>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/messenger' exact element={<Messenger/>}></Route>
      </Routes>
    </div>
    </Router>
  )
}

export default App
