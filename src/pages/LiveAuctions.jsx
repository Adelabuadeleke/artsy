import React from 'react'
import '../css/LiveAuctions.css'

function LiveAuctions() {
  return (
    <div className='liveauctions'>
      <h2>Home/ Auctions/ <span>Live bid </span> </h2>

      <div className="liveauctions_contents">
       <div className="liveauction_display" style={{backgroundImage:`url("../assets/Liveauctions/Rectangle 247.png")`}}>
        <div className="display_live">
         <div className='cancel'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
           <circle cx="24.5" cy="24.5" r="24.5" fill="#B8B4B4" fill-opacity="0.49"/> */}
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
           <path d="M0.329921 1.92292C0.225323 1.81832 0.142352 1.69415 0.0857438 1.55748C0.0291358 1.42082 1.10212e-09 1.27434 0 1.12642C-1.10212e-09 0.978497 0.0291358 0.832022 0.0857438 0.695358C0.142352 0.558695 0.225323 0.434519 0.329921 0.329921C0.434519 0.225323 0.558695 0.142352 0.695358 0.0857438C0.832022 0.0291358 0.978497 -1.10212e-09 1.12642 0C1.27434 1.10212e-09 1.42082 0.0291358 1.55748 0.0857438C1.69415 0.142352 1.81832 0.225323 1.92292 0.329921L13.5014 11.9107L25.0799 0.329921C25.1845 0.225323 25.3087 0.142352 25.4454 0.0857438C25.582 0.0291358 25.7285 0 25.8764 0C26.0243 0 26.1708 0.0291358 26.3075 0.0857438C26.4441 0.142352 26.5683 0.225323 26.6729 0.329921C26.7775 0.434519 26.8605 0.558695 26.9171 0.695358C26.9737 0.832022 27.0028 0.978497 27.0028 1.12642C27.0028 1.27434 26.9737 1.42082 26.9171 1.55748C26.8605 1.69415 26.7775 1.81832 26.6729 1.92292L15.0922 13.5014L26.6729 25.0799C26.7775 25.1845 26.8605 25.3087 26.9171 25.4454C26.9737 25.582 27.0028 25.7285 27.0028 25.8764C27.0028 26.0243 26.9737 26.1708 26.9171 26.3075C26.8605 26.4441 26.7775 26.5683 26.6729 26.6729C26.5683 26.7775 26.4441 26.8605 26.3075 26.9171C26.1708 26.9737 26.0243 27.0028 25.8764 27.0028C25.7285 27.0028 25.582 26.9737 25.4454 26.9171C25.3087 26.8605 25.1845 26.7775 25.0799 26.6729L13.5014 15.0922L1.92292 26.6729C1.81832 26.7775 1.69415 26.8605 1.55748 26.9171C1.42082 26.9737 1.27434 27.0028 1.12642 27.0028C0.978497 27.0028 0.832022 26.9737 0.695358 26.9171C0.558695 26.8605 0.434519 26.7775 0.329921 26.6729C0.225323 26.5683 0.142352 26.4441 0.0857438 26.3075C0.0291358 26.1708 0 26.0243 0 25.8764C0 25.7285 0.0291358 25.582 0.0857438 25.4454C0.142352 25.3087 0.225323 25.1845 0.329921 25.0799L11.9107 13.5014L0.329921 1.92292Z" fill="white"/>
           </svg>
          {/* </svg> */}
         </div>
         <div className='live'>live</div>
        </div>

        <div className="display_live_mobile">
          <div className="display_tag_mobile">
            <span>Tag:</span>  Lost or Wither
          </div>

           <div className="display_second">
            <div className='live_mobile'>live</div>
            <div className="viewers_count"> <img src="../assets/Liveauctions/Group 496.png" alt="" /> 295</div>

            <div className='cancel_mobile'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M0.329921 1.92292C0.225323 1.81832 0.142352 1.69415 0.0857438 1.55748C0.0291358 1.42082 1.10212e-09 1.27434 0 1.12642C-1.10212e-09 0.978497 0.0291358 0.832022 0.0857438 0.695358C0.142352 0.558695 0.225323 0.434519 0.329921 0.329921C0.434519 0.225323 0.558695 0.142352 0.695358 0.0857438C0.832022 0.0291358 0.978497 -1.10212e-09 1.12642 0C1.27434 1.10212e-09 1.42082 0.0291358 1.55748 0.0857438C1.69415 0.142352 1.81832 0.225323 1.92292 0.329921L13.5014 11.9107L25.0799 0.329921C25.1845 0.225323 25.3087 0.142352 25.4454 0.0857438C25.582 0.0291358 25.7285 0 25.8764 0C26.0243 0 26.1708 0.0291358 26.3075 0.0857438C26.4441 0.142352 26.5683 0.225323 26.6729 0.329921C26.7775 0.434519 26.8605 0.558695 26.9171 0.695358C26.9737 0.832022 27.0028 0.978497 27.0028 1.12642C27.0028 1.27434 26.9737 1.42082 26.9171 1.55748C26.8605 1.69415 26.7775 1.81832 26.6729 1.92292L15.0922 13.5014L26.6729 25.0799C26.7775 25.1845 26.8605 25.3087 26.9171 25.4454C26.9737 25.582 27.0028 25.7285 27.0028 25.8764C27.0028 26.0243 26.9737 26.1708 26.9171 26.3075C26.8605 26.4441 26.7775 26.5683 26.6729 26.6729C26.5683 26.7775 26.4441 26.8605 26.3075 26.9171C26.1708 26.9737 26.0243 27.0028 25.8764 27.0028C25.7285 27.0028 25.582 26.9737 25.4454 26.9171C25.3087 26.8605 25.1845 26.7775 25.0799 26.6729L13.5014 15.0922L1.92292 26.6729C1.81832 26.7775 1.69415 26.8605 1.55748 26.9171C1.42082 26.9737 1.27434 27.0028 1.12642 27.0028C0.978497 27.0028 0.832022 26.9737 0.695358 26.9171C0.558695 26.8605 0.434519 26.7775 0.329921 26.6729C0.225323 26.5683 0.142352 26.4441 0.0857438 26.3075C0.0291358 26.1708 0 26.0243 0 25.8764C0 25.7285 0.0291358 25.582 0.0857438 25.4454C0.142352 25.3087 0.225323 25.1845 0.329921 25.0799L11.9107 13.5014L0.329921 1.92292Z" fill="white"/>
              </svg>
            </div>
           </div>
         
        </div>


        <div className="display_bid">
         Current bid $4500
        </div>
        
        <div className='comments_outer'>
        <div className="comments_display_mobile">
         {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 45.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Ella Flynn
           </p>
           <p className="comment_text">
            Tight bid
           </p>
          </div>
         </div>
         {/* comment end */}


          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 46.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Uncle Luca
           </p>
           <p className="comment_text">
             instant bid
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 47.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Opeyemi Tiwalope
           </p>
           <p className="comment_text">
            $45.00 
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 48.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Celestina Quinn
           </p>
           <p className="comment_text">
            gm frens! ready to bidddd
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 49.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Samy Ellen
           </p>
           <p className="comment_text">
            i love this. $20.00 for me
           </p>
          </div>
         </div>
         {/* comment end */}


        </div>

        <div className="bid_all">
         <div className="place_bid">
          <small>Creator : Stormi Rylie</small>
          <div className="place_bid_content">
           <div className="place_bid_input">
            <input type="text" placeholder='Join Conversation...'/>
            <img src="../assets/Liveauctions/white_arrow.svg" alt="" />
           </div>

          </div>
         </div>
         <img src="../assets/Liveauctions/Frame 110.png" alt="" />

        </div>
       
        </div>
        <div className="display_tag">
         <span>Tag:</span>  Lost or Wither
        </div>
       </div>
       <div className="liveauction_comments">

        <div className="comments_display">
         {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 45.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Ella Flynn
           </p>
           <p className="comment_text">
            Tight bid
           </p>
          </div>
         </div>
         {/* comment end */}


          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 46.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Uncle Luca
           </p>
           <p className="comment_text">
             instant bid
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 47.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Opeyemi Tiwalope
           </p>
           <p className="comment_text">
            $45.00 
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 48.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Celestina Quinn
           </p>
           <p className="comment_text">
            gm frens! ready to bidddd
           </p>
          </div>
         </div>
         {/* comment end */}

          {/* comment start */}
         <div className="comment_display_item">
          <div className="commenter_img">
            <img src="../assets/Liveauctions/Ellipse 49.png" alt="" />
          </div>
          <div className="commenter_content">
           <p className="commenter_name">
            Samy Ellen
           </p>
           <p className="comment_text">
            i love this. $20.00 for me
           </p>
          </div>
        </div>
         {/* comment end */}

          <div className="bid_all">
            <div className="place_bid">
              <small>Creator : Stormi Rylie</small>
              <div className="place_bid_content">
              <div className="place_bid_input">
                <input type="text" placeholder='Place a bid...'/>
                <img src="../assets/Liveauctions/Vector (7).png" alt="" />
              </div>

              </div>
            </div>
            <img src="../assets/Liveauctions/Frame 110.png" alt="" />

          </div>
        </div>
       
         
       </div>
       
      </div>
     <a href="/drops">
      <div className="auctions_upcoming">
       <p>See upcoming drops</p>
       <img src="../assets/Liveauctions/arrow_upcoming.png" alt="" />
      </div>
     </a>
    </div>
  )
}

export default LiveAuctions