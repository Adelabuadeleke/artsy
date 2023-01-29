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

    <section className="featured">
      <h2>Featured</h2>
      {/* featuered  item start*/}
      <div className="featured__item">
        <img src="../../assets/Rectangle 299.png" alt="" />
        <div className="featured__contents">
          <h2>The Boolean Egyptian</h2>
          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, 
            lectus magna fringilla urna, porttitor 
            rhoncus dolor pur
          </p>
          <div className="featured__creators">
            <div className="creators__imgs">
              <img src="../../assets/Ellipse 14.png" alt="" />
              <img src="../../assets/Ellipse 15.png" alt=""  className='move' />
              <img src="../../assets/Ellipse 16.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 17.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 18.png" alt="" className='move'/>
            </div>

            <p>64 major creators</p>
            <div className="arrow">
              <img src="../../assets/Vector (4).png" alt=""/>
            </div>
           
            
          </div>
        </div>

      </div>
      {/* featuered  item end*/}

      {/* featuered  item start*/}
      <div className="featured__item reverse">
        <img src="../../assets/Rectangle 299 (1).png" alt="" />
        <div className="featured__contents">
          <h2>The Boolean Egyptian</h2>
          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, 
            lectus magna fringilla urna, porttitor 
            rhoncus dolor pur
          </p>
          <div className="featured__creators">
            <div className="creators__imgs">
              <img src="../../assets/Ellipse 14.png" alt="" />
              <img src="../../assets/Ellipse 15.png" alt=""  className='move' />
              <img src="../../assets/Ellipse 16.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 17.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 18.png" alt="" className='move'/>
            </div>

            <p>64 major creators</p>
            <div className="arrow">
              <img src="../../assets/Vector (4).png" alt=""/>
            </div>
           
            
          </div>
        </div>

      </div>
      {/* featuered  item end*/}

            {/* featuered  item start*/}
      <div className="featured__item">
        <img src="../../assets/Rectangle 299 (2).png" alt="" />
        <div className="featured__contents">
          <h2>The Boolean Egyptian</h2>
          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, 
            lectus magna fringilla urna, porttitor 
            rhoncus dolor pur
          </p>
          <div className="featured__creators">
            <div className="creators__imgs">
              <img src="../../assets/Ellipse 14.png" alt="" />
              <img src="../../assets/Ellipse 15.png" alt=""  className='move' />
              <img src="../../assets/Ellipse 16.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 17.png" alt="" className='move'/>
              <img src="../../assets/Ellipse 18.png" alt="" className='move'/>
            </div>

            <p>64 major creators</p>
            <div className="arrow">
              <img src="../../assets/Vector (4).png" alt=""/>
            </div>
           
            
          </div>
        </div>

      </div>
      {/* featuered  item end*/}
    </section>
   </div>
  )
}

export default Home