import React from 'react';
import './style.css';

function HomePage(props) {
    // render() {
    //     const { myFunction } = this.props; 

    return (
        <div>
            <div className="main-text"> 
                <div className="intro-section">
                    <div className="text-section"> 
                        <h1 className="intro-text"> Skincare is confusing. Let us help.</h1>
                        <h2 className="description-text">
                            At Glass Skin, we understand that skincare is not one size fit all. Our platform is designed to empower you with the essential tools to navigate this personalized skincare experience. 
                            Discover the perfect skincare products tailored specifically to your needs, craft a skincare regimen, and explore a diverse range of accessible products for everyone. 
                            Elevate your skincare routine with us. 
                        </h2>
                    </div>
                    <div className="image-section">
                        <img src="img/homepage-photo.jpg" alt="skincare products on a beige background" className="rounded-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HomePage;
