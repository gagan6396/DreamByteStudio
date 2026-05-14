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
          <h1 className='FrontHeadSection'>Professional Photographer in Rishikesh | Dream Byte Studio
</h1>
          <p className="ServiceAreaPara">Discover the Best photographer in Rishikesh. Hire Dream Byte Studio for stunning visuals, expert editing, and a touch of creativity in every frame.</p>
        </div>
        <div className="container-fluid">
        
        <div className="row">
           <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                 <div className="py-5 d-flex justify-content-center align-items-center flex-wrap">
      <div className="position-relative gallery-container">
        <img
          src="/image/Dream/8.webp"
          alt="main"
          className="img-fluid rounded shadow-lg main-img"
        />
        <img
          src="/image/Dream/8.webp"
          alt="side"
          className="img-fluid rounded shadow-lg small-img small-img-left"
        />
        <img
          src="/image/Dream/8.webp"
          alt="side2"
          className="img-fluid rounded shadow-lg small-img small-img-right"
        />
      </div>
    </div>
            </div>
                       <div className="col-12 col-lg-6">
             <h1 className="FrontHeadSection text-center mb-5">
                 Best Photographer in Rishikesh
                </h1>
                <h2>Define Moments of Perfection with Top Photography Service in Rishikesh</h2>
              <p className="ServiceAreaParagraph">Photographs and videos in the today-days world of technology are more than memories  - they signify your identity, your brand, and your tale. Dream Byte Studio prides itself on being one of the best photographers in Rishikesh, providing expert photography and videography solutions that exceed the maximum limits of creativity and superiority.
                No matter if you need wedding photography in Rishikesh, product photography, or commercial videography, our team makes each frame describe your story in precise terms with finesse and grace.Our experienced Photographers are experts in all manner of photography, incorporating the latest equipment and imaginative methods in their process for all their premium outputs.
              </p><h2>
                </h2>
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
                Why Choose Us – The Top Photographer in Rishikesh</h1>
             <p className="ServiceAreaPara">Over the years, we have gained the clients trust through repeated delivery of top-notch visuals that make a cut. We think that photography is more about capturing moments but also preserving emotions, stories, and memories that remain for life. It is through this dedication that makes us the best photographer in Rishikesh.At Dream Byte Studio, we bring local knowledge and world-class methods to create images that aren't just lovely but significant</p>
              <div className="quote-section">
              <div className="quote-icon">
               
              </div>
                </div>
                <hr></hr>
                <div>
                  
                </div>
            </div>
            </div>
            
            
      <div className="container-fluid header">
        <h1 className="FrontHeadSection text-center mb-5 pt-3">
                Book Best Photographer in Rishikesh Today
                </h1>
                <p className="ServiceAreaPara">Selecting the proper photographer can all make or break as to how your story is communicated. Back at Dream Byte Studio, it is our purpose to capture your vision and turn that into timeless memories.Whether you're planning a wedding, introducing a brand, or creating an event, our expert team ensures that each moment is framed with mastery and emotion.</p>
                
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
      <hr></hr>
       <div className='ServicePadding SectionFrontSecondSection pt-5'>
          <h1 className='FrontHeadSection'>Book Best Photographer in Rishikesh Today</h1>
          <p className="ServiceAreaParagraph">Selecting the proper photographer can all make or break as to how your story is communicated. Back at Dream Byte Studio, it is our purpose to capture your vision and turn that into timeless memories.Whether you're planning a wedding, introducing a brand, or creating an event, our expert team ensures that each moment is framed with mastery and emotion.
</p>
        </div>
    </section>
      
    </div>
  );
}