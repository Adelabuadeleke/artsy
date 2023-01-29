import React from 'react'
import Nav from '../components/Nav'
import '../css/Home.css'
function Home() {
  return (
   <div className='home'>
    <Nav />
    <div className="photography">
      <h1>Photography is poetry &</h1>
      <h1>beautiful untold stories</h1>
      <br />
      <p>
        Flip through more than 10,000 vintage shots, 
        old photograghs, historic
      </p>
      <p> images and 
        captures seamlessly in one place. Register to get top access.
      </p>
    </div>

    <div className="photography__scroll">
      <div className="scroll__right first">
        <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
      </div>
      


      <div className="scroll__right "> 
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
         <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
       
      </div>

       <div className="scroll__right second">
        <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
      </div>
      


      <div className="scroll__right second"> 
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
         <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
       
      </div>
    </div>
   </div>
  )
}

export default Home