import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage'
import Footer from './component/Footer'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
