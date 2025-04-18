import React from "react";
import Navbar from "./Navbar";
import "../styles/bobaDream.css";
import "../styles/groceryScout.css";
import { useEffect, useRef } from "react";

const BobaDream = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);
  return (
    <div className="boba-container">
      <Navbar />
      <div className="boba-top-area">
        <div className="boba-content">
            <h1>BOBA DREAM</h1>
            <p>React.js, Node.js, MySQL, CSS</p>
        </div>

        {/* Images Section */}
        <div className="bobaDream-images">
            <img src="/Boba Dream Home Page.png" alt="Home Page" className="boba-home-page-image" />
            </div>
        </div>

            {/* Light Background Section */}
            <div className="boba-light-section">
                <div className="boba-section-row">
                    <img className="boba-section-image-left" src="Boba Dream Home.png" alt="Left Image"></img>
                    <div className="boba-section-text">

                        <h2>Goal</h2>
                        <p>
                            Create a bubble tea restaurant website to learn and improve my personal React.js and Node.js coding abilities
                        </p>
                    </div>
                    <img className="boba-section-image-right" src="BobaDream_Logo.png" alt="Right Image"></img>
                </div>

                <div className="boba-section-row">
                    <div className="backend-api-text">
                        <h1>Step 1: Frontend</h1>
                        <p>
                            I designed a clean, light background with a subtle, moving bubble aesthetic using <strong>CSS</strong> and <strong>React.js</strong> to enhance visual interest without distraction. The focus remains on simplicity and functionality, ensuring a seamless and modern user experience.
                        </p>
                        
                        <div className="image-logo-container">
                            <img className="CSS-logo-image" src="CSS-Logo.png" alt="Right Image"></img>
                            <img className="CSS-logo-image" src="React-logo.png" alt="Right Image" />
                        </div>
                    </div>
                    
                    <img className="backend-api-image" src="Boba Dream About.png" alt="Right Image"></img>
                </div>

                <div className="boba-section-row">
                <img className="frontend-image hide-on-mobile" src="Boba-Signin.png" alt="Right Image" />
                    <div className="frontend-text">
                        <h1>Step 2: Backend Feautures</h1>
                        <p>
                            The backend was built using <strong>Node.js</strong> with a <strong>MySQL</strong>  database to securely store user credentials, including usernames and encoded passwords. It features a sign-in and sign-up system while tracking users orders for a reliable system.
                        </p>
                        
                        <div className="image-logo-container">
                            <img className="CSS-logo-image" src="MySQL-logo.png" alt="Right Image"></img>
                            <img className="Node-logo-image" src="Node.js-logo.png" alt="Right Image" />
                        </div>
                    </div>
                </div>

                <div className="boba-section-row">
                    <div className="frontend-text-1">
                        <h1>1. Confirmation Email</h1>
                        <p>
                        When creating an account with BobaDream, a confirmation email is sent to verify the user's email. This is implemented using <strong>NodeMailer</strong> and secure tokens, ensuring a reliable authentication process.
                        </p>
                        <h3>Node Mailer</h3>
                    </div>
                    <img className="frontend-image mobile-only" src="Boba-Signin.png" alt="Right Image Mobile" />
                    <div className="frontend-text-1">
                        <h1>2. MySQL database</h1>
                        <p>
                        A <strong>MySQL</strong> database securely stores user information, including email, encrypted passwords, and order history. Upon signing in, users can access their profile page, where their email and orders are displayed. 
                        </p>
                        <h3>MySQL</h3>
                    </div>
                </div>

                <div className="boba-section-row">
                    <div className="boba-last-text">
                        <p>
                            This website was never published or released to the public as it was a side project to increase my React.js, Node.js and MySQL proficiency but the code will be available on my - 
                            <a href="https://github.com/dnikashov/BobaDream/" target="_blank" rel="noopener noreferrer">
                                GitHub page
                            </a>!
                        </p>
                        
                        <video ref={videoRef} className="boba-video" autoPlay loop muted playsInline>
                            <source src="Boba Dream video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

        </div>
    </div>
  )
} 

export default BobaDream;