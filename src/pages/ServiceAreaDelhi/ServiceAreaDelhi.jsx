import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';
import '../../style/ServiceArea.css';
import { Link, useLocation } from 'react-router-dom';


const ServiceAreaDelhi = ({ title, description, icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4">
      <div
        className={`service-cards ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-overlay"></div>
      </div>
    </div>
  );
};
export default function App() {
  const services = [
    {
      title: "Product Shoot",
      description: "High-quality product photography for catalogs and e-commerce",
      icon: "📦"
    },
    {
      title: "Content Creation",
      description: "Engaging visual content for social media and marketing",
      icon: "✨"
    },
    {
      title: "Event Shoot",
      description: "Capturing memorable moments from corporate and social events",
      icon: "🎉"
    },
    {
      title: "E-commerce Photography",
      description: "Professional product images optimized for online stores",
      icon: "🛒"
    },
    {
      title: "Fashion & Model Shoot",
      description: "Stylish fashion photography and portfolio shoots",
      icon: "👗"
    },
    {
      title: "Shop For Rent",
      description: "Complete short film production from concept to delivery",
      icon: "🎥"
    },
  ];

  return (
    <div className="app-container">
            <section className="TopBanner">
        <img src="/image/banner/2.png" alt="image1"/>
      </section>
     <section className="ContactSection services-sections">
        <div className='ServicePadding SectionFrontSecondSection'>
          <h1 className='FrontHeadSection'>Best Photo Studio in Delhi | Dream Byte Studio
</h1>
          <p className="ServiceAreaPara">Capture stunning photos and videos with Photo Studio in Delhi, We specialize in creative,
             high-end photography for brands, models, and individuals.
          </p>
        </div>
        <div className="container-fluid">
        
        <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                 <div className="py-5 d-flex justify-content-center align-items-center flex-wrap">
      <div className="position-relative gallery-container">
        <img
          src="/image/Dream/2.webp"
          alt="main"
          className="img-fluid rounded shadow-lg main-img"
        />
        <img
          src="/image/Dream/13.webp"
          alt="side"
          className="img-fluid rounded shadow-lg small-img small-img-left"
        />
        <img
          src="/image/Dream/10.webp"
          alt="side2"
          className="img-fluid rounded shadow-lg small-img small-img-right"
        />
      </div>
    </div>
            </div>
            <div className="col-md-6">
             <h1 className="FrontHeadSection text-center mb-5">
                  Photo Studio in Delhi

                </h1>
             <p className="ServiceAreaParagraph">Dream Byte Studio is a top Photo studio in Delhi that combines creativity with artistry through our photography and videography services to individuals, couples and businesses. We have a team of professional photographers, directors, editors, and cinematographers who are trained to provide quality images to boost personal experiences as well as to transform corporate brands.
             We have collaborated with numerous brands and people over the years and provided them with the best quality visuals. We guarantee to capture your vision and stories through our prism 
             of professional photography and videography. Our clients trust us because we are the best Photography studio in Delhi.</p>
            </div>
        </div>
        
           <div className="media-service-container">
        {/* Image */}
        <img
          src="/image/productshoot/4.webp"  // put your image path here
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/grahaaroma webp/8.webp"   // put your image path here
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/grahaaroma webp/7.webp"   // put your image path here
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/productshoot/9.webp"   // put your image path here
          alt="Product"
          className="media-Service"
        />

        {/* Video */}
        {/* <video className="media-item" controls>
          <source src="/videos/product-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      </div>
      <div className="container">
            <div className='quote-div SectionFrontSecondSection'>
                <h1 className="FrontHeadSection text-center mb-5">
                 Why We’re Delhi’s Best Photo Studio
                </h1>
             <p className="ServiceAreaPara">Our experience is what qualifies us to be the best Photo studio in Delhi. 
              From concept planning and styling to the final edit, all clients are taken through the whole process to make sure that what comes out of the process is exactly what the client envisioned. We have employees who guarantee you a hassle-free experience when planning a wedding photo shoot, opening up a product line or creating a professional image.</p>
              <div className="quote-section">
              <div className="quote-icon">
               
              </div>
                </div>
                 {/* <div className='ServiceWrapper'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h6 className="">
                 High-resolution photography</h6>
                 <p>We provide our quality photography and videography services to your digital platform, web, and marketing advertisement.
</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                 Creative styling and setup</h6>
                 <p>We have the experience of putting your product photography ideas to practice. We will incorporate props, backgrounds and themes which are aligned with your brand.
</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">
                 E-Commerce ready</h6>
                 <p>Our product photoshoot studio is specialized in product photography which is optimized to be used on Amazon, Flipkart, Shopify, or your website.</p>

                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                       Editing and Retouching</h6>
                       <p>We will also give you polished, high quality, edited images and videos of you with a photoshoot that meets your brand standards.</p>
                     </div>
                     </div>
                </div> */}
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5 pt-3">
                 Our services:
                </h1>
                <p className="ServiceAreaPara">We offer specialized solutions for all needs at our Photography studio in Delhi, including:               </p>
                <div>
                  
                </div>
                <hr></hr>
            </div>
            </div>
      <div className="container-fluid header">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <ServiceAreaDelhi
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
          <div className="row">
                    <div className="col-12 text-center">
                      <button className="DreamBtn DreamCards mt-5 animate-on-scroll bounce-in serviceAreaButton">
                        <Link to="/services">More Services</Link>
                      </button>
                    </div>
                  </div>
        </div>
      </div>
       <div className='ServicePadding SectionFrontSecondSection pt-5'>
          <h1 className='FrontHeadSection'>Frame Your Moments with Dream Byte Studio</h1>
          <p className="ServiceAreaParagraph">Finding a team that can turn your vision into impactful visuals is more important than simply having good lighting or cameras. At Dream Byte Studio, we provide results that are both meaningful and professional by fusing technology with creative direction. All the work is done to perfection, including creating the right background and even editing the final photos. As a result of our commitment to perfection, we have become one of the most trusted Photo studios in Delhi for shooting events, weddings, portraits, and brands.
          </p>
        </div>
    </section>
      
    </div>
  );
}

