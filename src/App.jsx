import './App.css'
import Header from './Header/Header'
import Home from './Components/Home'
import Add from './Components/Add'
import View from './Components/View'
import { Route,Routes } from 'react-router-dom'
import Update from './Components/Update'
import './bootstrap.min.css'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/add' element={<Add/>}/>

      </Routes>
    </>
  )
}

export default App
