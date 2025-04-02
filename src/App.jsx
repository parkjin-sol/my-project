import { useState } from 'react'
import './App.css'
import Header from './include/Header'
import Footer from './include/Footer'
import MainTop from './component/details/MainTop'
import MainBottom from './component/details/MainBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <div className='container'>
          <h1 className='main-title'>BIRDS WATCHER</h1>
          <MainTop />
          <MainBottom/>
        </div>
      <Footer/>
    </>
  )
}

export default App
