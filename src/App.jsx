

import './App.css'

import 'bootstrap/dist/css/bootstrap.css'


import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Agreement from './components/Agreement';


function App() {

  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/agreement' element={<Agreement />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
