import React from "react";
import "../../style/services.css";
import "../../style/home.css";
import { FaCamera, FaVideo, FaPhotoVideo, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
  Package, 
  Pencil, 
  Calendar, 
  ShoppingCart, 
  Sparkles, 
  Film, 
  Mic, 
  Clapperboard, 
  Home, 
  Heart, 
  FileVideo 
} from 'lucide-react';
function Services() {
  const services = [
    {
      title: "Product Shoot",
      desc: "Capturing timeless moments with creative frames.",
      icon: <Package/>,
      icon1: <FaCamera/>,
      img: "/image/Dream/1.webp",
       link: "/portfolio/product-shoot" , 
    },
    {
      title: "Content Creation",
      desc: "Professional video production with cinematic quality.",
      icon: <Pencil/>,
       icon1: <FaCamera/>,
      img: "/image/Dream/8.webp",
       link: "/portfolio/content-creation", 
    },
    {
      title: "Event Shoot",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Calendar />,
       icon1: <FaCamera/>,
      img: "/image/Dream/12.webp",
       link: "/portfolio/event-shoot", 
    },
    {
      title: "E-Commerce Photography",
      desc: "Capturing timeless moments with creative frames.",
      icon: <ShoppingCart/>,
       icon1: <FaCamera/>,
      img: "/image/Dream/17.webp",
       link: "/portfolio/ecommerce-photograph", 
    },
    {
      title: "Fashion and Model Shoots",
      desc: "Professional video production with cinematic quality.",
      icon: <Sparkles/>,
       icon1: <FaCamera/>,
      img: "/image/Dream/18.webp",
       link: "/portfolio/fashion-model-shoots", 
    },
    {
      title: "Ad Films and Commercial shoots",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Film/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link:  "/portfolio/ad-films-commercial", 
    },
    {
      title: "Podcast Shoot",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Mic/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link: "/portfolio/podcast-shoot", 
    },
    {
      title: "Short Flim Production",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Clapperboard/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link: "/portfolio/short-film-production" , 
    },
     {
      title: "Real estate photography",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Home/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link: "/portfolio/real-estate-photography", 
    },
     {
      title: "Wedding, Videography and Photography",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <Heart/>,
       icon1: <FaCamera/>,
      img: "/image/Dream/12.webp",
       link: "/portfolio/wedding-videography" , 
    },
    {
      title: "Documentary",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <FileVideo/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link: "/portfolio/documentary", 
    },
    {
      title: "Studio for Rent",
      desc: "Showcasing your best self with creative portfolio shoots.",
      icon: <FileVideo/>,
       icon1: <FaCamera/>,
      img: "/image/MAN13348-2-1920x1080.jpg",
       link: "/portfolio/studio-rent", 
    },
  ];


  return (
    <>
      {/* <Header /> */}
      <section className="TopBanner">
        <img src="/image/banner/banner.webp" alt="image1"/>
      </section>

      <section className="FrontSecondSection services-sections" >
        <div className="DreamFrontSecondSection SectionFrontSecondSection">
          <div className="container-fluid">
              <h1 className="FrontHeadSection">
                The Best Production house in India
              </h1>
              <p className="fst-italic">
                Welcome to Dream Byte Studio, where we bring brands to life by
                creating compelling visuals. As the creative heart of Dream Byte
                Solutions, we have enabled impactful showcasing and brand
                building for brands all over India and have become one of the
                most trusted production houses in India.
              </p>
              </div>
              </div>
              <div className="container-fluid DreamPadding">

              <div className="row">
    {services.map((service, index) => (
      <div className="col-md-4 mb-4" key={index}>
        <div className="service-card" style={{ "--delay": `${index * 0.2}s` }}>
          <div
            className="service-img"
            style={{ backgroundImage: `url(${service.img})` }}
          ></div>

          <div className="service-content">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>

          <div className="service-bottom-icon">{service.icon1}</div>

          {/* 👇 Dynamic link here */}
          <Link to={service.link} className="service-right-btn">
            <FaGreaterThan className="arrow" />
          </Link>
        </div>
      </div>
    ))}
      </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Services;
