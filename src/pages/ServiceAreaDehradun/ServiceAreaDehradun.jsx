import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer'
import '../../style/Home.css';
import '../../style/ServiceDetails.css';
import '../../style/ServiceArea.css';
import { Link, useLocation } from 'react-router-dom';


const ServiceAreaDehradun = ({ title, description, icon, index }) => {
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
          <h1 className='FrontHeadSection'>Photo Studio in Dehradun, Uttarakhand | Dream Byte Studio</h1>
          <p className="ServiceAreaPara">Hire a professional Photo Studio in Dehradun, as we are recognised as the best photographers in Dehradun for our magnificent work over the years.
          </p>
        </div>
        <div className="container-fluid">
        
        <div className="row">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                 <div className="py-5 d-flex justify-content-center align-items-center flex-wrap">
      <div className="position-relative gallery-container">
        <img
          src="/image/Dream/17.webp"
          alt="main"
          className="img-fluid rounded shadow-lg main-img"
        />
        <img
          src="/image/Dream/1.webp"
          alt="side"
          className="img-fluid rounded shadow-lg small-img small-img-left"
        />
        <img
          src="/image/Dream/15.webp"
          alt="side2"
          className="img-fluid rounded shadow-lg small-img small-img-right"
        />
      </div>
    </div>
            </div>
            <div className="col-12 col-lg-6">
             <h1 className="FrontHeadSection text-center mb-5">
                  Photo Studio in Dehradun
                </h1>
             <p className="ServiceAreaParagraph">In today's digital age, photos and videos are no longer just memories, it is your story and your identity. We Dream Byte Studio, 
              offers high-quality photography and videography services in Dehradun. We have the Best photographers in Dehradun and our objective is to provide the highest 
              quality output which will make your memories even more beautiful through attractive cinematics, candid shots and videos.Through videos and images, we establish a
               sense of awareness in your audience or consumers in order to engage them.We specialize in photography and videography, as we have the Best professionals of our
                industry. Our team ensure that every detail of your brand or your special day will be captured and presented beautifully for endless memories.

             </p>
            </div>
        </div>
        
           <div className="media-service-container">
        {/* Image */}
        <img
          src="/image/productshoot/4.webp"
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/grahaaroma webp/8.webp"
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/grahaaroma webp/7.webp"
          alt="Product"
          className="media-Service"
        />
        <img
          src="/image/productshoot/9.webp"
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
                  What Makes us the Best Photographer in Dehradun
                </h1>
             <p className="ServiceAreaPara">Over the years, we have completed numerous quality projects and have established ourselves as the Best photographer in Dehradun. Our specialty is creating convincing visuals of events, brands, and products. We combine imagination, advanced technology, and our skills
               to provide incredible outcomes. Our crew is passionate and obsessed with excellence, to convert thoughts into images that resonate and remain in the minds of the audience.</p>
              <div className="quote-section">
              <div className="quote-icon">
               
              </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5 pt-3">
                 Our services:
                </h1>
                <p className="ServiceAreaPara">Dream Byte Studio offers a complete range of
                   photography and production solutions in Dehradun, including:
                </p>
                <div>
                  
                </div>
                <hr></hr>
            </div>
            </div>
      <div className="container-fluid header">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <ServiceAreaDehradun
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button className="DreamBtn DreamCards mt-5 animate-on-scroll bounce-in serviceAreaButton">
              <Link to="/services">More Services</Link>
            </button>
          </div>
        </div>
      </div>
       <div className='ServicePadding SectionFrontSecondSection pt-5'>
          <h1 className='FrontHeadSection'>Capture Your Story with Dream Byte Studios</h1>
          <p className="ServiceAreaParagraph">Choosing the right photographer makes all the difference. Our team makes sure to capture all the details of your occasion and product with precision. Being the finest Photographer in Dehradun and a reliable Photo Studio in Dehradun, we are determined to make your moments unforgettable memories.
          </p>
        </div>
    </section>
      
    </div>
  );
}