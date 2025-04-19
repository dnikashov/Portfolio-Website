import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        {/* Left Section - Single Image */}
        <div className="about-left">
          <img src="/About_Main_Image.png" alt="Profile" className="profile-image" />
        </div>

        {/* Middle Section - Text */}
        <div className="about-middle">
          <p>Daniel</p>
          <h1>Nikashov</h1>
        </div>

        {/* Right Section - Four Images */}
        
          <div className="about-right">
          <img src="/Image_4.png" alt="Image 1" className="small-image small-image-1" />
          <img src="/Image_1.png" alt="Image 2" className="small-image small-image-2" />
          <img src="/Image_3.png" alt="Image 3" className="small-image small-image-3" />
          <img src="/Image_2.png" alt="Image 4" className="small-image small-image-4" />
          </div>

          <div className="about-extra">
            <p className="about-activity">
              When I'm not in class or working, I'm on the court playing for the Waterloo Men's Volleyball Team.
            </p>
            <img src="/Waterloo_Warriors_logo.png" alt="Waterloo Logo" />
          </div>

          <div className="about-background">
            <h2 className="about-more">Here's a little more about me . . .</h2>

            <div className="gallery">
              <img src="/About-Img-1.jpg" alt="Gallery Image 1" className="gallery-item-1" />
              
              <video className="gallery-item" controls>
                <source src="/About-Mov-1.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              
              <img src="/About-Img-2.jpg" alt="Gallery Image 3" className="gallery-item-3" />
              <img src="/About-Img-4.jpg" alt="Gallery Image 4" className="gallery-item-4" />
              
              <video className="gallery-item" controls>
                <source src="/About-Mov-2.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              
              <img src="/About-Img-5.JPG" alt="Gallery Image 6" className="gallery-item-6" />
              <img src="/About-Img-6.jpg" alt="Gallery Image 7" className="gallery-item-7" />
              
              <video className="gallery-item" controls>
                <source src="/About-Mov-3.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
              
              <img src="/About-Img-7.jpg" alt="Gallery Image 9" className="gallery-item-9" />
              <img src="/About-Img-8.jpg" alt="Gallery Image 10" className="gallery-item-10" />
            </div>
          </div>

          <div className="about-thank-you">
            <h2>Thank you for learning a bit more about me.</h2>
            <p>Check out some projects down below!</p>

            <div className="project-grid">
              <div className="project-box" onClick={() => navigate("/grocery-scout")}>
                <img src="/GroceryScout_logo.png" alt="Project 1" className="project-img" />
              </div>
              <div className="project-box-2" onClick={() => navigate("/boba-dream")}>
                <img src="/BobaDream_Logo.png" alt="Project 2" className="project-img-2" />
              </div>
              <div className="project-box" onClick={() => navigate("/budget-app")}>
                <img src="/BudgetTrack-logo-1.png" alt="Project 3" className="project-img" />
              </div>
              <div className="project-box-3" onClick={() => navigate("/morning-pulse")}>
                <img src="/Morning_Pulse_Logo.png" alt="Project 4" className="project-img-2" />
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default About;
