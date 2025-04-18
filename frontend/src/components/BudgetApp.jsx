import React from "react";
import Navbar from "./Navbar";
import "../styles/groceryScout.css";
import "../styles/budgetApp.css";
import { useEffect, useRef } from "react";

const BudgetApp = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);
  return (
    <div className="budget-container">
      <Navbar />
      
      <div className= "budget-top-area">
        <div className="budget-content">
            <h1>BUDGET TRACK</h1>
            <p>Swift UI, Swift Data, Figma</p>
        </div>

        {/* Images Section */}
        <div className="groceryScout-images">
            <img src="/Budget Expense.png" alt="Grocery App Screenshot 1" className="grocery-image" />
            <img src="/Budget Categories.png" alt="Grocery App Screenshot 2" className="grocery-image" />
            <img src="/Budget Add Expense.png" alt="Grocery App Screenshot 3" className="grocery-image" />
            </div>
        </div>

        {/* Light Background Section */}
        <div className="budget-section">
            <div className="budget-section-row">
                <img className="budget-section-image-left" src="Budget App Store.jpg" alt="Left Image"></img>
                <div className="budget-section-text">

                    <h2>Goal</h2>
                    <p>
                        Create a Budget Tracker app that allows you to visualize future savings while focusing on current expenses. 
                    </p>
                    <p>
                        <strong> TRACK, SAVE, AND GROW</strong>
                    </p>
                </div>
                <img className="budget-section-image-right" src="BudgetTrack-logo.png" alt="Right Image"></img>
            </div>

            <div className="budget-section-row">
                <div className="backend-api-text">
                    <h1>Backend Model</h1>
                    <p>
                        To save and store the user's expenses, budgets and savings a backend model was deployed utilizing <strong>Swift's Core Data </strong>and <strong>Context</strong>. This allows the user to track their financial progress while reflecting on past budgets and savings.
                    </p>
                </div>
                <div className="mobile-image-row">
                    <img className="budget-backend-image" src="Swift-logo.png" alt="Right Image" />
                    <img className="budget-backend-image" src="Swift Data Logo.png" alt="Right Image" />
                </div>
            </div>

            <div className="budget-section-row">
                <img className="frontend-image hide-on-mobile" src="Budget Cat.png" alt="Right Image" />
                <div className="frontend-text">
                    <h1>Frontend Development</h1>
                    <p>
                        For the frontend development of the app, I sketched the design in <strong>Figma</strong> to generate a sketch of the app. Then I coded and developed the Figma design in <strong>Swift UI</strong> while implementing the Core Data backend.
                    </p>
                </div>
                <img className="frontend-image mobile-only" src="Budget Cat.png" alt="Right Image (Mobile)" />
            </div>

            <div className="light-section-row">
                <div className="testing-text">
                    <h1>Testing and Publishing</h1>
                    <p>
                        To test the product I allowed friends and family to download and use the app for a week and after certain comments and conerns where implemented and incorporated the app was officially published to the <strong>App Store!</strong>
                    </p>
                </div>
                <video ref={videoRef} className="testing-video" autoPlay loop muted playsInline>
                    <source src="/Budget Tracker Recording .mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


        </div>
    </div>
    );
};

export default BudgetApp;