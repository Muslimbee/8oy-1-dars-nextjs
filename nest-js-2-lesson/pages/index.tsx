import React from 'react'


export default function () {
  return (
    <div>
      
      <div id="main">
        <div className="containere" id="page1">
             <div className="bloob" id="ball"></div>
             <div className="top" id="layer">
                <div className="popup">
                    <span><i className="fa-solid fa-xmark" id="close"></i></span>
                    <div className="left-child">
                        <h3>mca.roni</h3>
                        <div className="video">
                            <video  muted loop src="./image/2024-01-16 11-22-58.mp4"></video>
                        </div>
                    </div>
                    <div className="right-child">
                        <ul>
                            <li><div><h4>Home</h4></div></li>
                            <li><div><h4>work</h4></div></li>
                            <li><div><h4>About</h4></div></li>
                            <li><div><h4>contact</h4></div></li>
                        </ul>
                        <button>Take tour</button>
                    </div>
                </div>
                <div className="cursor display" id="mouse">play reel</div>
                <nav id="nav">
                    <h1>Mca.Roni</h1>
                    <h3 className="btn">Menu</h3>
                </nav>
                <nav id="nav2">
                    <ul className="side-links">
                        <li>About us</li>
                        <li><div className="line"></div>
                        </li>
                        <li>portfolio</li>
                    </ul>
                    <ul className="social-media">
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-google"></i></li>
                    </ul>
                </nav>
                <div className="text-area">
                    <div className="preview">

                    </div>
                    <div className="text-box">
                    <h4>Design studio</h4>
                    <h1>We deign for people,</h1>
                    <h1>We transfrom</h1>
                    <h1 className="hacker" data-value="Companies.">Companies.</h1>
                    </div>
                </div>
                <div className="comment">
                    <h3>testimonial</h3>
                    <div>
                        <h4>user 1</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod similique reiciendis veritatis provident id.</p>
                    </div>
                    <div>
                        <h4>user 2</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod similique reiciendis veritatis provident id.</p>
                    </div>
                    <div>
                        <h4>user 3</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod similique reiciendis veritatis provident id.</p>
                    </div>
                    <div>
                        <h4>user 4</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod similique reiciendis veritatis provident id.</p>
                    </div>
                </div>
             </div>
        </div>
    </div>
  
    </div>
  )
}
