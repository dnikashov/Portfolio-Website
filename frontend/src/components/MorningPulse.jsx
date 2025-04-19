import React from "react";
import Navbar from "./Navbar";
import "../styles/bobaDream.css";
import "../styles/morningPulse.css";
import "../styles/groceryScout.css";

const MorningPulse = () => {
  return (
    <div className="boba-container">
      <Navbar />
      <div className="boba-top-area">
        <div className="boba-content">
            <h1>MORNING PULSE</h1>
            <p>Flask, Google Maps API, Open Weather API</p>
        </div>

        {/* Images Section */}
        <div className="bobaDream-images">
            <img src="/Morning Pulse Home Screen.png" alt="Home Page" className="boba-home-page-image" />
            </div>
        </div>

            {/* Light Background Section */}
            <div className="morning-light-section">
                <div className="boba-section-row">
                    <div className="boba-section-text">

                        <h2>Goal</h2>
                        <p>
                            Create a bubble tea restaurant website to learn and improve my personal React.js and Node.js coding abilities
                        </p>
                    </div>
                    <img className="morning-section-image-right" src="Morning_Pulse_Logo.png" alt="Right Image"></img>
                </div>

                <div className="boba-section-row">
                    <div className="backend-api-text">
                        <h1>Step 1: Frontend</h1>
                        <p>
                        I designed a bright, energizing interface for Morning Pulse using <strong>Flask</strong> and <strong>HTML</strong> featuring a soft light orange background. The experience is intentionally simple, guiding users toward signing up for a daily email that helps them start their morning with purpose and clarity.
                        </p>
                        
                        <div className="image-logo-container">
                            <img className="Flask-logo-image" src="flask.png" alt="Right Image"></img>
                        </div>
                    </div>
                    
                    <img className="backend-api-image" src="Morning Pulse Home Screen.png" alt="Right Image"></img>
                </div>

                <div className="boba-section-row">
                <img className="frontend-image hide-on-mobile" src="Morning Pulse Email.png" alt="Right Image" />
                    <div className="frontend-text">
                        <h1>Step 2: Backend Feautures</h1>
                        <p>
                            The backend was built using <strong>MySQL</strong> database to securely store user credentials, including emails, address, work address and time to arrive to work. This allows the user to get automated emails every morning specific to their exact needs.
                        </p>
                        
                        <div className="image-logo-container">
                            <img className="CSS-logo-image" src="MySQL-logo.png" alt="Right Image"></img>
                        </div>
                    </div>
                </div>

                <div className="boba-section-row">
                    <div className="frontend-text-1">
                        <h1>1. MySQL database</h1>
                        <p>
                        The <strong>MySQL</strong> database receives it's information from the input form in the home page and is storred within pythonanywhere where the user's credentials, including emails, address, work address and time to arrive to work are saved. MySQL was chosen as it is effective to store such information and is already implemented within pythonanywhere.
                        </p>
                        <h3>MySQL</h3>
                    </div>
                    <img className="frontend-image mobile-only" src="Morning Pulse Email.png" alt="Right Image Mobile" />
                    <div className="frontend-text-1">
                        <h1>2. CLI</h1>
                        <p>
                        A CLI backend is used to automate the email sending by composing an email that uses <strong>OpenWeather API</strong> and <strong>Google Maps API</strong> to notify the user using their specific location on the weather and traffic to work. This email is then sent to the user's email via <strong>Simple Mail Transfer Protocol (SMTP).</strong>
                        </p>
                        <h3>OpenWeather API, Google Maps API, SMTP</h3>
                    </div>
                </div>

                <div className="boba-section-row">
                    <div className="boba-last-text">
                    <p> This website is now live and publicly hosted on <strong>PythonAnywhere</strong> using their free tier. Feel free to check it out and share any feedback if you get the chance — I’d love to hear your thoughts. <br /> <a href="https://dnikashov.pythonanywhere.com" target="_blank" rel="noopener noreferrer">Visit the live site</a> </p>
                    </div>
                </div>

        </div>
    </div>
  )
} 

export default MorningPulse;