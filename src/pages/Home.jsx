import React, {useEffect, useState} from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import '../css/Home.css'
function Home() {
  // const [scrollImages, setScrollImages] = useState([
  //   '../../assets/Rectangle 231.png',
  //   '../../assets/Rectangle 232.png',
  //   '../../assets/Rectangle 233.png',
  //   // '../../assets/Rectangle 234.png'])

useEffect(()=>{
  const infiniteScroll = () => {
  const imgContainer = document.querySelector('.slides')
  let imgs =  document.querySelectorAll('.slide')

  const interval = 3000
  let index = 1

  const firstClone = imgs[0].cloneNode(true);
  const lastClone = imgs[imgs.length - 1].cloneNode(true);

  firstClone.id = 'first-clone'
  lastClone.id = 'last-clone'

  imgContainer.append(firstClone)
  imgContainer.prepend(lastClone)

  imgContainer.style.transform = `translate(${-300 * index}px)`;

    const startSlide = () => {
      setInterval(() => {
      // console.log(imgs)

        index = index + 1
        imgContainer.style.transform = `translate(${-300 * index}px)`;
        imgContainer.style.transition ='.7s'

      }, interval);
      
    }
    imgContainer.addEventListener('transitionend', ()=>{
      // console.log('trans...')
      imgs = document.querySelectorAll('.slide')
      // console.log(imgs)
      if(imgs[index].id === firstClone.id){
        imgContainer.style.transition = 'none';
        index = 1
        imgContainer.style.transform = `translate(${-300 * index}px)`;
        // imgContainer.style.transition ='.7s'
      }
    })

    startSlide()


 
  }

  const infiniteScrollLeft = () => {
    const imgContainerLeft = document.querySelector('.slides_left')
    let imgsLeft =  document.querySelectorAll('.slide_left')

    const interval = 3000
    let indexLeft = 1

    const firstCloneLeft = imgsLeft[0].cloneNode(true);
    const lastCloneLeft = imgsLeft[imgsLeft.length - 1].cloneNode(true);

    firstCloneLeft.id = 'first-clone-left'
    lastCloneLeft.id = 'last-clone-left'

    imgContainerLeft.append(firstCloneLeft)
    imgContainerLeft.prepend(lastCloneLeft)

    imgContainerLeft.style.transform = `translateX(${-300 * indexLeft}px)`;

    const startSlide = () => {
      setInterval(() => {
      // console.log(imgs)

        indexLeft = indexLeft - 1
        imgContainerLeft.style.transform = `translateX(${-300 * indexLeft}px)`;
        imgContainerLeft.style.transition ='.7s'

      }, interval);
      
    } 
    imgContainerLeft.addEventListener('transitionend', ()=>{
      // console.log('trans...')
      imgsLeft = document.querySelectorAll('.slide_left')
      // console.log(imgs)
      if(imgsLeft[indexLeft].id === lastCloneLeft.id){
        imgContainerLeft.style.transition = 'none';
        indexLeft = imgsLeft.length - 2
        imgContainerLeft.style.transform = `translateX(${-300 * indexLeft}px)`;
        // imgContainer.style.transition ='.7s'
      }
    })

    startSlide()


 
  }
infiniteScroll()
infiniteScrollLeft()
}, [])
 
  


  return (
   <div className='home'>
    <SideBar />
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

    <div className="photography__images">
      <img src="../../assets/Rectangle 240.png" alt="" className="first" />
      <img src="../../assets/Rectangle 241.png" alt="" className="second" />
      <img src="../../assets/Rectangle 242.png" alt="" className="third" />
    </div>

    <div className="photography__scroll">
      <div className="scroll__infinite first">
        <div className="slides">
           <div className="slide">
              <img src='../../assets/Rectangle 231.png' alt="" className="scroll_img" />
            </div>
           <div className="slide">
            <img src='../../assets/Rectangle 232.png' alt="" className="scroll_img" />
           </div>
           
           <div className="slide">
             <img src='../../assets/Rectangle 233.png' alt="" className="scroll_img" />
           </div>
          
          <div className="slide">
            <img src='../../assets/Rectangle 234.png' alt="" className="scroll_img" />
          </div>
        </div>
           
      </div>

      <div className="scroll__infinite first">
      <div className="slides_left">
          <div className="slide_left">
            <img src='../../assets/Rectangle 231.png' alt="" className="scroll_img" />
          </div>
          <div className="slide_left">
          <img src='../../assets/Rectangle 232.png' alt="" className="scroll_img" />
          </div>
          
          <div className="slide_left">
            <img src='../../assets/Rectangle 233.png' alt="" className="scroll_img" />
          </div>
        
        <div className="slide_left">
          <img src='../../assets/Rectangle 234.png' alt="" className="scroll_img" />
        </div>
      </div>
          
    </div>
      


       {/* <div className="scroll__right "> 
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
         <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
       
      </div> */}

        {/* <div className="scroll__right second">
        <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
      </div> */}
      


     {/* <div className="scroll__right second"> 
        <img src="../../assets/Rectangle 233.png" alt="" />
        <img src="../../assets/Rectangle 234.png" alt="" />
         <img src="../../assets/Rectangle 231.png" alt="" />
        <img src="../../assets/Rectangle 232.png" alt="" />
       
      </div> */}
    </div>

    <section className="featured">
      <h2>Featured</h2>
      {/* featuered  item start */}
      <div className="featured__item">
        <div 
        className="featured__item_display" 
        style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('../../assets/Rectangle\ 299.png')`}}>
          <h2>Boolean Egyptian</h2>


          <div className="display_btn">
            <img src="../../assets/Variant6.png" alt="" />
          </div>
        </div>
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
        <div className="featured__item_display" style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('../../assets/Rectangle\ 299\ (1).png')`}}>
          <h2>Are we there yet?</h2>


          <div className="display_btn">
            <img src="../../assets/Variant6.png" alt="" />
          </div>
        </div>
        <img src="../../assets/Rectangle 299 (1).png" alt="" />
        <div className="featured__contents">
          <h2>Oloibiri 1997</h2>
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
        <div className="featured__item_display" style={{background:`linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('../../assets/Rectangle\ 299\ (2).png')`}}>
          <h2>The Boolean Egyptian</h2>


          <div className="display_btn">
            <img src="../../assets/Variant6.png" alt="" />
          </div>
        </div>
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
    <section className="auction">
      <div className="auction__title">
        <h2>See Upcoming Auctions and Exhibitions</h2>
        <img src="../../assets/Arrow 3.png" alt="" />
      </div>

      <div className="auction__slider">
        <div className="slider__div">
          
          <div className="slider_first"><span>01</span>
          <div className="first_contents">
            <h2><span> <img src="../../assets/Ellipse 6.png" alt="" /> </span>MONALISA REDEFINED IN STYLE.</h2>
            <small> Start on : 08:00 GTS . Monday</small>
            <p>
              GET EXCLUSIVE VIEWING OF CONTEMPORARY 
              ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE 
              WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
            </p>
          </div>
            
          </div>
          <div className="slider__second">
            <div className="see_more">
              <a href=""><p>See more</p></a>
            </div>
            

            <button>Set a reminder</button>
          </div>
        </div>
      </div>

      <div className="auction__bottom">
        <div className="btns">
          <div className="btn">
            <img src="../../assets/Vector (7).png" alt="" />
          </div>

           <div className="btn">
            <img src="../../assets/Vector (5).png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className="explore">
      <div className="explore_item first">
        <h2>Explore marketplace</h2>
        <img src="../../assets/Vector (6).png" alt="" />
      </div>

       <div className="explore_item">
        <h2>See auctions </h2>
        <img src="../../assets/Vector (6).png" alt="" />
      </div>
    </section>
    <section className="top_creator">
      <div className="top_creator_first">
        <div className="creator_title">
          <p>TOP CREATORS OF </p>
          <p>THE WEEK</p>
        </div>
        
        <div className="creator_segments">
          <p>Editorials</p>
          <p>Fashion</p>
          <p>Lifestyle</p>
          <p>Blueprint</p>
        </div>

      </div>

      <div className="top_creator_second">
        <p> “Everything always looked better in black and white. 
        Everything always  as if it were the first time; 
        there’s always more people in a black and white photograph. 
        It just makes it seem that there were more people at a gig, 
        more people at a football match, than with colour photography. 
        Everything looks more exciting.”– Jack Lowden</p>
        <div className="text_over">
          <div className="over_conts">
            <h2>circa</h2>
            <h1>1985</h1>
          </div>
    
        </div>
     <img src="../../assets/Rectangle 299 (3).png" alt="" className="woman" />
      </div>
      
    </section>
    <section className="newsletter">
      <div className="newsletter_inner">
        <h2>NewsLetter</h2>
        <p>Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="newsletter_input">
          <input type="email" name="" id="" placeholder='Enter your Email'/>
          <button>Subscribe</button>
        </div>
      </div>
     
    </section>
    <footer>
      <div className="footer__inner">
        <div className="footer_inner_one">
          <h1>
            ARTSY.
          </h1>
        </div>

        <div className="footer_inner_two">
          <p>Home</p>
          <p>Marketplace</p>
          <p>Auctions</p>
          <p>Drops</p>
        </div>

        <div className="footer_inner_three">
          <p>Blog</p>
          <p>Wallets</p>
          <p>Rates</p>
          <p>High bids</p>
        </div>

        <div className="footer_inner_four">
          <p> <img src="../../assets/email_icon.png" alt="" /> artsystudios@gmail.com</p>
          <p> <img src="../../assets/location_icon.png" alt="" /> Lagos, Nigeria</p>
        </div>
      </div>
      <div className="footer_end">
        <p>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </footer>
   </div>
  )
}

export default Home