import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer'
import '../../style/home.css';
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
          <h1 className='FrontHeadSection'>Best Photo Studio in Noida </h1>
          <p className="ServiceAreaPara">Dream Byte Studio is the Best Photo Studio in Noida.  Our services include end to end photography and videography of individuals, brands, and businesses. Our professional photographers will ensure that they capture your vision, creatively and accurately whether you require fancy portraits, a good product shoot, or a film to promote your product.
Our specialization lies in a variety of photography services. We specialize in product photography, fashion, corporate portraits, wedding photography, event photography, social media content and more. As experienced photographers in Noida our team believes that every picture tells a story - a story that deserves to be captured with creativity, clarity, and emotion.
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
                  Why Choose Our Photo Studio in Noida?  
                </h1>
             <p className="ServiceAreaParagraph">As the most experienced photographers in Noida, we have worked with numerous clients, including startups and influencers,
                as well as major brands and individual clients.Our team is passionate to produce visual content that is not only attractive, but that is also emotionally appealing and generates engagement.
             </p>
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
                  Book Your Shoot Today
                </h1>
             <p className="ServiceAreaPara">
                Dream Byte Studio offers creative and quality Photo studio services.  We blend artistry, professionalism and technology to gain the best visuals to bring timeless memories and interactions. Contact us to plan your next shoot with the trusted Photo Studio in Noida, whether it’s a brand campaign, a personal portfolio, or a corporate assignment,we will make sure it will be a professional and memorable experience.
                </p><div className="quote-section">
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
          <h1 className='FrontHeadSection'>Capture Your Story with Dream Byte Studios</h1>
          <p className="ServiceAreaParagraph">Choosing the right photographer makes all the difference. Our team makes sure to capture all the details of your occasion and product with precision. Being the finest Photographer in Dehradun and a reliable Photo Studio in Dehradun, we are determined to make your moments unforgettable memories.
          </p>
        </div>
    </section>
      
    </div>
  );
}