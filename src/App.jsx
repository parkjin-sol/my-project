import { useState } from 'react'
import './App.css'
import Header from './include/Header'
import Footer from './include/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <div className='main-title'>BIRDS WATCHER</div>
        <div className='main-content-top'>
          <div className='main-content-top-left'>
            <div className='main-content-top-item'>
              <div className='item-main'>
                수리부엉이
              </div>
              <figure>
                <img src='https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/pexels-lara-jameson-9363214-cropped-1075x1324.webp' alt='' />
              </figure>
            `</div>
            </div>
            <div className='main-content-top-right'>
              <div className='main-content-top-item'>
                <figure>
                  <img src='https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/pexels-jack-winbow-1457983-3-768x685.webp' alt='' />
                </figure>
                <div className='item-main'>
                  수리부엉이
                </div>
              </div>
              <div className='main-content-top-item'>
               
                <figure>
                  <img src='https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/rayul-_M6gy9oHgII-unsplash-1-768x960.webp' alt='' />
                </figure>
                <div className='item-main'>
                  수리부엉이
                </div>
              </div>
              <div className='main-content-top-item'>
                
                <figure>
                  <img src='https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/07/andi-rieger-x9H9GupmS48-unsplash-1094x1324.webp' alt='' />
                </figure>
                <div className='item-main'>
                  수리부엉이
                </div>
              </div>
              <div className='main-content-top-item'>
               
                <figure>
                  <img src='https://themenectar.com/salient/mag/wp-content/uploads/sites/41/2023/06/resource-database-jRDZ4_wYCa8-unsplash2-768x751.webp' alt='' />
                </figure>
                <div className='item-main'>
                  수리부엉이
                </div>
              </div>
            </div>
        </div>
        <div className="main-content-bottom">

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
