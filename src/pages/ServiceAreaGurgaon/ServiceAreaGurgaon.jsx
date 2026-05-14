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
          <h1 className='FrontHeadSection'> Photo Studio in Gurgaon</h1>
          <p className="ServiceAreaPara">Welcome to Dream Byte Studio the best Photo Studio in Gurgaon where creativity meets professionalism. We specialize in photography and videography services for individuals, brands and influencers. We are equipped with the latest technology for photography and videography, whether it is a corporate shoot, product shoot, ecommerce photography, fashion and model photography or ad film shoot our expert team of photographers in Gurgaon deliver stunning results.
           <br/>We have a highly equipped team and studio in terms of cameras, light, set up and background. All projects are managed with professionalism and care to detail, to deliver the best quality outcomes. Every image is improved by our post-production specialists who edit, retouch, and color balance your photos in order to make them look professional and clean.
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
                   Why Choose Our Photo Studio in Gurgaon
                </h1>
             <p className="ServiceAreaParagraph">Our team of photographers in Gurgaon ensures the combination of artistry with the advanced technology to provide high quality and enthralling photos and videos that will not be forgotten. It could be a business portrait, it could be a travel shot,
                it could be a branding exercise, we make sure that your images are clear and vivid.</p>
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
          <h1 className='FrontHeadSection'>Bring Your Story to Life Through Our Lens</h1>
          <p className="ServiceAreaParagraph">If you’re searching for a reliable photo studio in Gurgaon that delivers excellence, creativity, and professionalism, your search ends here, Dream Byte Studio provides result oriented services. We have a vision of delivering the best photography and videography services at affordable prices. Get in touch 
            with us today to discuss your next project or schedule a session at our studio - and experience photography like never before.</p>
        </div>
    </section>
      
    </div>
  );
}