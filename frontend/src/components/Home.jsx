import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);

  const [typedTitle, setTypedTitle] = useState("");
  const titleText = "Who is Daniel Nikashov?";
  const [typedText, setTypedText] = useState("");
  const fullText = `Daniel Nikashov is a mechatronics engineering student and a software developer at the University of Waterloo. He specializes in iOS app development and full-stack web projects, handling both frontend and backend. Beyond coding, Daniel is a dedicated athlete, playing for the University of Waterloo varsity men’s volleyball team which makes him committed to both personal and professional growth in his daily life.`;


  
  const gptRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );
  
    if (gptRef.current) observer.observe(gptRef.current);
  
    return () => {
      if (gptRef.current) observer.unobserve(gptRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || typedTitle.length >= titleText.length) return;
  
    const timeout = setTimeout(() => {
      setTypedTitle((prev) => titleText.substring(0, prev.length + 1));
    }, 50); 
  
    return () => clearTimeout(timeout);
  }, [typedTitle, isVisible]);
  
  useEffect(() => {
    if (!isVisible || typedTitle !== titleText || typedText.length >= fullText.length) return;
  
    const timeout = setTimeout(() => {
      setTypedText((prev) => fullText.substring(0, prev.length + 1));
    }, 5); 
  
    return () => clearTimeout(timeout);
  }, [typedText, typedTitle, isVisible]);
  
  useEffect(() => {
    if (typedText.length === fullText.length) {
      setShowBar(true);
    }
  }, [typedText]);
  
  const scrollToWork = () => {
    const target = document.getElementById("work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  

  return (
    <div>
      <Navbar />
      <div className="home-container">
          {/* Section 1 - Intro */}
          <div className="section intro-section">
            <img src="/Frame+Face 2.png" alt="Frame & Face" className='frame-face'></img>
          {/* Right Side Text */}
          <div className="intro-text">
            <h1>Hey There!</h1>
            <p>
              My name is Daniel, and I would like you 
              to join me in getting to know a little more about myself.
            </p>

            {/* "About Me" Link Button */}
            <button className="about-me-btn" onClick={scrollToWork}>
              ↓ Experience ↓
            </button>
          </div>
        </div>

        {/* GPT section */}
        <div className="GPT-section" ref={gptRef}>
          <img src="/GPT_Logo.png" alt="GPT Logo" />
          <div className="text-container">
            <h2>{typedTitle}</h2>
            <div className="answer-text">
              <p>{typedText}</p>

              {showBar && (
                <div className="GPT-bar-image">
                  <img src="/GPT_bar.png" alt="GPT Bar" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="work-scroll-wrapper" id="work">
          <div className="work-section">
            <div className="work-text">
              <h1>WORK!</h1>
              <p>Here are some of the cool projects that I've been able to create</p>
            </div>
          </div>


          <div className="multi-section-container">

            {/* Section 1 - Light Green */}
            <div className="section-box light-green clickable" onClick={() => navigate("/grocery-scout")}>
              {isMobile ? (
                <>
                  <img src="/GroceryScout_logo.png" alt="GroceryScout" className="section-image" />

                  <div className="text-content">
                    <p className="medium-text">IOS APP DEVELOPMENT</p>
                    <h1 className="large-text">GROCERY SCOUT</h1>
                    <p className="small-text">
                      Want a simple way to compare real-time grocery prices? Meet GroceryScout—your go-to tool for checking live prices across major grocery stores, helping you find the best deals instantly!
                    </p>
                    <p>Python, Swift, Git, Figma</p>
                  </div>

                  <video ref={videoRef} className="section-video" autoPlay loop muted playsInline>
                    <source src="/Home Grocery Scout Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <>
                  <img src="/GroceryScout_logo.png" alt="GroceryScout" className="section-image full-left" />
                  <video ref={videoRef} className="section-video" autoPlay loop muted playsInline>
                    <source src="/Home Grocery Scout Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="text-content right">
                    <p className="medium-text">IOS APP DEVELOPMENT</p>
                    <h1 className="large-text">GROCERY SCOUT</h1>
                    <p className="small-text">
                      Want a simple way to compare real-time grocery prices? Meet GroceryScout—your go-to tool for checking live prices across major grocery stores, helping you find the best deals instantly!
                    </p>
                    <p>Python, Swift, Git, Figma</p>
                  </div>
                </>
              )}
            </div>

            {/* Section 2 - Light Blue */}
            <div className="section-box light-blue reverse clickable" onClick={() => navigate("/boba-dream")}>
              {isMobile ? (
                <>
                  <img src="/BobaDream_Logo.png" alt="Boba Dream" className="section-image" />
                  <div className="text-content">
                    <p className="medium-text">FULL STACK WEB DEVELOPMENT</p>
                    <h1 className="large-text">BOBA DREAM</h1>
                    <p className="small-text">Boba Dream is a vibrant and modern bubble tea store website built using React and Node.js. Designed for seamless performance and responsiveness, the site showcases a dynamic menu, intuitive navigation, and real-time order capabilities to deliver an engaging user experience for bubble tea lovers.</p>
                    <p>React.js, Node.js, MySQL, CSS</p>
                  </div>
                  <video ref={videoRef} className="section-video-1" autoPlay loop muted playsInline>
                    <source src="/Home Boba Dream Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <>
                  <img src="/BobaDream_Logo.png" alt="Boba Dream" className="section-image full-right" />
                  <div className="text-content left">
                    <p className="medium-text">FULL STACK WEB DEVELOPMENT</p>
                    <h1 className="large-text">BOBA DREAM</h1>
                    <p className="small-text">Boba Dream is a vibrant and modern bubble tea store website built using React and Node.js. Designed for seamless performance and responsiveness, the site showcases a dynamic menu, intuitive navigation, and real-time order capabilities to deliver an engaging user experience for bubble tea lovers.</p>
                    <p>React.js, Node.js, MySQL, CSS</p>
                  </div>
                  <video ref={videoRef} className="section-video-1" autoPlay loop muted playsInline>
                    <source src="/Home Boba Dream Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
            </div>

            {/* Section 3 - Light Yellow */}
            <div className="section-box light-yellow clickable" onClick={() => navigate("/budget-app")}>
              {isMobile ? (
                <>
                  <img src="/BudgetTrack-logo.png" alt="BudgetTrack" className="section-image" />
                  <div className="text-content">
                    <p className="medium-text">IOS APP DEVELOPMENT</p>
                    <h1 className="large-text">BUDGETRACK</h1>
                    <p className="small-text">
                      Keep track of your monthly budget while monitoring your savings! Log daily expenses and gain clear insights into your finances with intuitive visuals. See the long-term compounding effects and stay on top of your goals with BudgetTrack!
                    </p>
                    <p>Swift UI, Swift Data, Figma</p>
                  </div>
                  <video ref={videoRef} className="section-video" autoPlay loop muted playsInline>
                    <source src="/Home Budget Tracker Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <>
                  <img src="/BudgetTrack-logo.png" alt="BudgetTrack" className="section-image full-left" />
                  <video ref={videoRef} className="section-video" autoPlay loop muted playsInline>
                    <source src="/Home Budget Tracker Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="text-content right">
                    <p className="medium-text">IOS APP DEVELOPMENT</p>
                    <h1 className="large-text">BUDGETRACK</h1>
                    <p className="small-text">
                      Keep track of your monthly budget while monitoring your savings! Log daily expenses and gain clear insights into your finances with intuitive visuals. See the long-term compounding effects and stay on top of your goals with BudgetTrack!
                    </p>
                    <p>Swift UI, Swift Data, Figma</p>
                  </div>
                </>
              )}
            </div>

            {/* Section 4 - Light Orange */}
            <div className="section-box light-orange reverse clickable" onClick={() => navigate("/morning-pulse")}>
              {isMobile ? (
                <>
                  <img src="/Morning_Pulse_Logo.png" alt="Morning Pulse logo" className="section-image" />
                  <div className="text-content">
                    <p className="medium-text">FLASK WEB DEVELOPMENT</p>
                    <h1 className="large-text">MORNING PULSE</h1>
                    <p className="small-text">
                      Struggling to start your day on the right foot? Look no further than Morning Pulse! This app delivers a fully automated morning update with the day's weather, traffic, and more—helping you wake up informed and ready to take on the day!
                    </p>
                  </div>
                  <img src="/Morning Pulse Home Screen.png" alt="Morning Pulse" className="section-image-1" />
                </>
              ) : (
                <>
                  <img src="/Morning_Pulse_Logo.png" alt="Morning Pulse logo" className="section-image full-right" />
                  <div className="text-content left">
                    <p className="medium-text">FLASK WEB DEVELOPMENT</p>
                    <h1 className="large-text">MORNING PULSE</h1>
                    <p className="small-text">
                      Struggling to start your day on the right foot? Look no further than Morning Pulse! This app delivers a fully automated morning update with the day's weather, traffic, and more—helping you wake up informed and ready to take on the day!
                    </p>
                  </div>
                  <img src="/Morning Pulse Home Screen.png" alt="Morning Pulse" className="section-image-1" />
                </>
              )}
            </div>

            </div>
      </div>

      </div>
    </div>
  );
};
<div style={{ height: "200vh", backgroundColor: "lightgray" }}>
  <h2 style={{ textAlign: "center", paddingTop: "50px" }}>Scroll Test Section</h2>
</div>

export default Home;
