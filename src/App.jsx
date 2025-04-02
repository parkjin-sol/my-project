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
        <h1 className='main-title'>BIRDS WATCHER</h1>
        <div className='main-content-top'>
        <div className="main-content-title-wrap">
          <h2 className="main-content-title">Dictionary</h2>
          <button className="main-content-more">더보기</button>
        </div>
        <div className='main-content-top-wrap'>
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
         
        </div>
        <div className="main-content-bottom">
        <div className="main-content-title-wrap">
          <h2 className="main-content-title">Community</h2>
          <button className="main-content-more">더보기</button>
        </div>
          <div className='main-content-bottom-wrap'>
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th >작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='content-center'>베트남 가서 버드와칭을 한 경험</td>
                <td>장나리</td>
                <td>2025.04.04</td>
              </tr>
              <tr>
                <td className='content-center'>안녕하세요~ 처음왔는데 꿀팁 알려주세요!</td>
                <td>권유리</td>
                <td>2025.04.03</td>
              </tr>
              <tr>
                <td className='content-center'>제가 제주도에서 버드와칭을했는데 너무 좋았어요~</td>
                <td>김철수</td>
                <td>2025.04.02</td>
              </tr>
            </tbody>
          </table>
          </div>
         
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
