import React from "react";
import Navbar from "./Navbar";
import "../styles/groceryScout.css";
import { useEffect, useRef } from "react";

const GroceryScout = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set playback speed to 2x
    }
  }, []);
  return (
    <div className="grocery-container">
      <Navbar />
      <div className="grocery-top-area">
        <div className="grocery-content">
            <h1>GROCERY SCOUT</h1>
            <p>Python, Swift, Git, Figma</p>
        </div>

        {/* Images Section */}
        <div className="groceryScout-images">
            <img src="/Card View.png" alt="Grocery App Screenshot 1" className="grocery-image" />
            <img src="/Home View.png" alt="Grocery App Screenshot 2" className="grocery-image" />
            <img src="/Store Selection View.png" alt="Grocery App Screenshot 3" className="grocery-image" />
            </div>
        </div>

        {/* Light Background Section */}
        <div className="grocery-light-section">
            <div className="light-section-row">
                <img className="light-section-image-left" src="Grocery_AppPage.jpg" alt="Left Image"></img>
                <div className="light-section-text">

                    <h2>Goal</h2>
                    <p>
                    Create a grocery comparison app that allows you to scour multiple grocery stores and compare their real time price
                    </p>
                </div>
                <img className="light-section-image-right" src="GroceryScout_logo.png" alt="Right Image"></img>
            </div>

            {/* Backend API Section*/}
            <div className="light-section-row">
                <div className="backend-api-text">
                    <h1>Step 1: Backend API</h1>
                    <p>
                    For the creation of a real time grocery comparison API, I needed a way to collect, store and access the grocery products name and price. 
                    </p>
                </div>
                <img className="backend-api-image" src="NoFrills_Render.png" alt="Right Image"></img>
            </div>

            <div className="light-section-row">
                <div className="backend-api-1-text">
                    <h1>1. Create Python Script</h1>
                    <p>
                        To build and maintain the grocery store's product database, I developed a Python script that extracts product names, prices, weights, and price per 100g. This script utilizes <strong>Beautiful Soup</strong> for parsing HTML and <strong>Playwright</strong> for seamless web automation, enabling precise data extraction from publicly available grocery store websites.
                    </p>
                    <h3> Python - Beautiful Soup - Playwright </h3>
                </div>
                <div className="backend-api-2-text">
                    <h1>2. Create Flask App</h1>
                    <p>
                        To create a usable API with endpoints accessible by the iOS app, I developed a <strong> Flask </strong> app to host the JSON files that were previously created.
                    </p>
                    <h3> Python - Flask </h3>
                </div>
            </div>
            <div className="light-section-row">
                <div className="backend-api-3-text">
                    <h1>3. Upload to GitHub and Host on Render</h1>
                    <p>
                        After the grocery store's products are scraped and saved as a JSON file, they are uploaded to <strong> GitHub </strong> along with the Flask app which is automatically deployed utilizing Render
                    </p>
                    <h3> GitHub - yaml </h3>
                </div>
                <img className="backend-api-3-image" src="Python-logo.png" alt="Right Image"></img>
            </div>

            {/* Front End Implementation*/}
            <div className="light-section-row">
                <img className="frontend-image" src="New Grocery Page.png" alt="Right Image"></img>
                <div className="frontend-text">
                    <h1>Step 2: Frontend Development</h1>
                    <p>
                    For the frontend development of the app, I aimed to create a clean, intuitive design that effectively presents key information
                    </p>
                </div>
                
            </div>

            <div className="light-section-row">
                <div className="frontend-text-1">
                    <h1>1. Design UI/UX using Figma</h1>
                    <p>
                    Using Figma, I designed a minimalistic UI to streamline integration into Xcode when developing the app. This approach helped me visually map out the app's structure, ensuring a clear design vision while making it easier to implement features and refine the user interface.
                    </p>
                    <h3> Figma </h3>
                </div>
                <img className="frontend-image-1" src="Figma-logo.png" alt="Right Image"></img>
                <img className="frontend-image-2" src="Figma Design Initial.png" alt="Right Image"></img>
            </div>
            
            <div className="light-section-row">
                <img className="frontend-image-1 hide-on-mobile" src="Xcode-logo.png" alt="Left Image" />
                <img className="frontend-image-1 hide-on-mobile" src="Swift-logo.png" alt="Left Image" />
                <div className="frontend-text-1">
                    <h1>2. Sketch Frontend in XCode</h1>
                    <p>
                    When creating GroceryScout I initially created a rough sketch of the UI inside <strong>XCode</strong> to ensure that the information can be inputted and passed along smoothly between pages. I used the <strong>iOS Core Data</strong> and <strong>Models</strong> as the main database and object to store all the information of the products and grocery lists. 
                    </p>
                    <h3> XCode - Swift - Core Data </h3>
                </div>
                {/* Xcode & Swift logos shown only on mobile */}
                <div className="mobile-logo-row mobile-only">
                    <img src="Xcode-logo.png" alt="Xcode Mobile Logo" />
                    <img src="Swift-logo.png" alt="Swift Mobile Logo" />
                </div>

                
            </div>

            <div className="light-section-row">
                <div className="frontend-text-1">
                    <h1>3. Implement Backend API</h1>
                    <p>
                    After the sketch of the frontend is complete I implemented API endpoints to access the JSON data from the flask app previously created that is hosted on Render.
                    </p>
                </div>
                <div className="frontend-text-1">
                    <h1>4. Clean and Polish UI</h1>
                    <p>
                    Once the backend was fully functional with all the desired features, I refined the frontend to closely match the original Figma sketches. This ensured a clean, polished look while maintaining a strong and reliable backend.
                    </p>
                </div>
            </div>

            <div className="light-section-row">
                <div className="testing-text">
                    <h1>Step 3: Testing and Publishing</h1>
                    <p>
                    After completing both the frontend and backend of the app, I shared it with friends and family to gather feedback on any major bugs or potential improvements. After a few weeks of testing and refinements, I finalized the app and officially launched it on the App Store!
                    </p>
                </div>
                <video ref={videoRef} className="testing-video" autoPlay loop muted playsInline>
                    <source src="/Grocery Scout Recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


        </div>
    </div>
  );
};

export default GroceryScout;
