import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/portfolio.css";

// Portfolio configuration with routes
const portfolioConfig = [
  {
    id: "product-shoot",
    title: "Product Shoot",
    route: "/portfolio/product-shoot",
  },
  {
    id: "event-shoot",
    title: "Event Shoot",
    route: "/portfolio/event-shoot",
  },
  {
    id: "ecommerce-photograph",
    title: "E-Commerce Photograph",
    route: "/portfolio/ecommerce-photograph",
  },
  {
    id: "fashion-model-shoots",
    title: "Fashion and Model Shoots",
    route: "/portfolio/fashion-model-shoots",
  },
  {
    id: "ad-films-commercial",
    title: "Ad Films and Commercial shoots",
    route: "/portfolio/ad-films-commercial",
  },
  {
    id: "podcast-shoot",
    title: "Podcast Shoot",
    route: "/portfolio/podcast-shoot",
  },
  {
    id: "real-estate-photography",
    title: "Real estate photography",
    route: "/portfolio/real-estate-photography",
  },
  {
    id: "wedding-videography",
    title: "Wedding, Videography and Photography",
    route: "/portfolio/wedding-videography",
  },
  {
    id: "documentary",
    title: "Documentary",
    route: "/portfolio/documentary",
  },
  {
    id: "short-film-production",
    title: "Short Flim Production",
    route: "/portfolio/short-film-production",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    route: "/portfolio/content-creation",
  },
  {
    id: "studio-rent",
    title: "Studio for Rent",
    route: "/portfolio/studio-rent",
  }
];

const getPortfolioById = (id) => {
  return portfolioConfig.find(portfolio => portfolio.id === id);
};

const getPortfolioByTitle = (title) => {
  return portfolioConfig.find(portfolio => portfolio.title === title);
};

const Portfolio = () => {
  const navigate = useNavigate();
  const { portfolioId } = useParams();
  const location = useLocation();

  const portfolios = [
    "Product Shoot",
    "Event Shoot",
    "E-Commerce Photograph",
    "Fashion and Model Shoots",
    "Ad Films and Commercial shoots",
    "Podcast Shoot",
    "Real estate photography",
    "Wedding, Videography and Photography",
    "Documentary",
    "Short Flim Production",
    "Content Creation",
    "Studio for Rent",
  ];

  // Instagram videos for Content Creation (thumbnail + video URL)
  const instagramVideos = [
    {
      thumbnail: "/image/Dream/10.webp",
      videoUrl: "https://www.instagram.com/reel/DQVtnhJjiAw/embed/"
    },
    {
      thumbnail: "/image/productshoot/3.webp",
      videoUrl: "https://www.instagram.com/reel/DPL9N7wAexx/embed/"
    },
    {
      thumbnail: "/image/Dream/17.webp",
      videoUrl: "https://www.instagram.com/reel/DNIo_tNhRJX/embed/"
    },
    // Add more videos here
  ];

  // Different images for each portfolio
  const portfolioImages = {
    "Product Shoot": [
      "/image/productshoot/7.webp",
      "/image/productshoot/2.webp",
      "/image/productshoot/3.webp",
      "/image/productshoot/4.webp",
      "/image/productshoot/5.webp",
      "/image/productshoot/6.webp",
      "/image/productshoot/1.webp",
      "/image/productshoot/8.webp",
      "/image/productshoot/9.webp",
      "/image/productshoot/10.webp",
      "/image/productshoot/11.webp",
      "/image/productshoot/12.webp",
      "/image/productshoot/13.webp",
      "/image/productshoot/14.webp",
      "/image/productshoot/15.webp",
      "/image/demo/Jaivik Oils/1.webp",
      "/image/demo/Jaivik Oils/2.webp",
      "/image/demo/Jaivik Oils/5.webp",
    ],    
    "Event Shoot": [
      "/image/demo/Events/1.webp",
      "/image/demo/Events/2.webp",
     "/image/demo/Events/3.webp",
     "/image/demo/Events/4.webp",
     "/image/demo/Events/5.webp",
     "/image/demo/Awards/1.webp",
     "/image/demo/Awards/2.webp",
     "/image/demo/Awards/3.webp",
     "/image/demo/Awards/4.webp",
     "/image/demo/Awards/5.webp",
     "/image/demo/Awards/6.webp",
     "/image/demo/Awards/7.webp",
     "/image/demo/Awards/8.webp",
     "/image/demo/Awards/9.webp",
     "/image/demo/Awards/10.webp",
    ],
    "E-Commerce Photograph": [
      "/image/demo/Erikae.com/1.webp",
      "/image/demo/Erikae.com/2.webp",
      "/image/demo/Erikae.com/3.webp",
      "/image/demo/Jaivik e.com/1.webp",
      "/image/demo/Jaivik e.com/2.webp",
      "/image/demo/Jaivik e.com/6.webp",
     "/image/demo/Erikae.com/4.webp",
      "/image/demo/Erika Product/2.webp",
      "/image/demo/Erika Product/3.webp",
    ],
    "Fashion and Model Shoots": [
     "/image/demo/models/11.webp",
     "/image/demo/models/1.webp",
     "/image/demo/models/2.webp",
     "/image/demo/models/3.webp",
     "/image/demo/models/4.webp",
     "/image/demo/models/5.webp",
     "/image/demo/models/6.webp",
     "/image/demo/models/7.webp",
     "/image/demo/models/8.webp",
     "/image/demo/models/9.webp",
     "/image/demo/models/10.webp",
    ],
    "Ad Films and Commercial shoots": [
      "/image/productshoot/7.webp",
      "/image/productshoot/2.webp",
      "/image/productshoot/3.webp",
      "/image/productshoot/4.webp",
      "/image/productshoot/5.webp",
      "/image/productshoot/6.webp",
      "/image/productshoot/1.webp",
      "/image/productshoot/8.webp",
      "/image/productshoot/9.webp",
      "/image/productshoot/10.webp",
      "/image/productshoot/11.webp",
      "/image/productshoot/12.webp",
      "/image/productshoot/13.webp",
      "/image/productshoot/14.webp",
      "/image/productshoot/15.webp",
    ],
    "Podcast Shoot": [
     "/image/demo/Studio/Untitled-2.webp"
    ],
    "Real estate photography": [
     "/image/demo/Real Estate/1.webp",
      "/image/demo/Real Estate/2.webp",
       "/image/demo/Real Estate/3.webp",
        "/image/demo/Real Estate/4.webp",
         "/image/demo/Real Estate/5.webp",
         "/image/demo/Real Estate/6.webp",
         "/image/demo/Real Estate/7.webp",
         "/image/demo/Real Estate/8.webp",
         "/image/demo/Real Estate/9.webp",        
      
    ],
    "Wedding, Videography and Photography": [
      "/image/demo/wedding/1.webp",
      "/image/demo/wedding/2.webp",
      "/image/demo/wedding/3.webp",
      "/image/demo/wedding/4.webp",
      "/image/demo/wedding/5.webp",
    ],
    "Documentary": [
     "/image/Dream/1.webp",
      "/image/Dream/14.webp",
      "/image/Dream/12.webp",
    ],
    "Short Flim Production": [
      "/image/Dream/11.webp",
      "/image/Dream/1.webp",
      "/image/Dream/12.webp",
     "/image/Dream/1.webp",
      "/image/Dream/14.webp",
      "/image/Dream/12.webp",
    ],
    "Content Creation": [
      "/image/productshoot/7.webp",
      "/image/productshoot/2.webp",
      "/image/productshoot/3.webp",
    ],
    "Studio for Rent": [
      "/image/demo/Studio/fhvc.webp",
      "/image/demo/Studio/ghj.webp",
      "/image/demo/Studio/kl;.webp",
      "/image/demo/Studio/Untitled-2.webp",
    ],
  };

  const [selectedPortfolio, setSelectedPortfolio] = useState(portfolios[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionRefs = useRef({});
  const isScrollingFromClick = useRef(false);

  // Create refs for each portfolio section
  useEffect(() => {
    portfolios.forEach((portfolio) => {
      if (!sectionRefs.current[portfolio]) {
        sectionRefs.current[portfolio] = React.createRef();
      }
    });
  }, []);

  // Handle URL changes and scroll to the correct section
  useEffect(() => {
    if (portfolioId) {
      const portfolio = getPortfolioById(portfolioId);
      if (portfolio) {
        setSelectedPortfolio(portfolio.title);
        setTimeout(() => {
          scrollToPortfolio(portfolio.title);
        }, 100);
      }
    }
  }, [portfolioId]);

  // Handle scroll to update active portfolio
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingFromClick.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = portfolios.length - 1; i >= 0; i--) {
        const portfolio = portfolios[i];
        const section = sectionRefs.current[portfolio]?.current;
        
        if (section && section.offsetTop <= scrollPosition) {
          setSelectedPortfolio(portfolio);
          
          // Update URL without triggering a full navigation
          const portfolioData = getPortfolioByTitle(portfolio);
          if (portfolioData && window.history && window.history.replaceState) {
            window.history.replaceState(null, '', portfolioData.route);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [portfolios]);

  // Function to scroll to a specific portfolio
  const scrollToPortfolio = (portfolioTitle) => {
    const section = sectionRefs.current[portfolioTitle]?.current;
    
    if (section) {
      isScrollingFromClick.current = true;
      
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
      
      setTimeout(() => {
        isScrollingFromClick.current = false;
      }, 1000);
    }
  };

  // Handle click to scroll to section
  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    
    // Update URL if navigate is available
    const portfolioData = getPortfolioByTitle(portfolio);
    if (portfolioData && navigate) {
      navigate(portfolioData.route, { replace: true });
    }
    
    scrollToPortfolio(portfolio);
  };

  return (
    <>
      <section className="TopBanner">
        <img src="/image/banner/portfolio.webp" alt="image1"/>
      </section>
      <section className="portfolio-page"></section>
      <div className="container-fluid portfolio-pages">
        <div className="row">
          {/* Left Column: Portfolio List */}
          <div className="col-md-3 portfolio-list-wrapper">
            <div className="portfolio-list">
              <h4 className="portfolio-title">OUR PORTFOLIOS</h4>
              <ul className="list-group">
                {portfolios.map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      selectedPortfolio === item ? "active" : ""
                    }`}
                    onClick={() => handlePortfolioClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: All Portfolio Sections */}
          <div className="col-md-9 portfolio-images-container">
            {portfolios.map((portfolio, idx) => (
              <div
                key={idx}
                ref={sectionRefs.current[portfolio]}
                className="portfolio-section"
                data-portfolio={portfolio}
              >
                <h3 className="portfolio-section-title">{portfolio}</h3>
                <div className="row">
                  {portfolio === "Content Creation" ? (
                    // Show Instagram video thumbnails for Content Creation
                    instagramVideos.map((video, i) => (
                      <div className="col-md-4 col-6 col-sm-6 mb-4" key={i}>
                        <div 
                          className="instagram-thumbnail-wrapper"
                          onClick={() => setSelectedVideo(video.videoUrl)}
                        >
                          <img
                            src={video.thumbnail}
                            alt={`Content Creation ${i}`}
                            className="img-fluid portfolio-img"
                          />
                          <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2
                    }}>
                      <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.4)'
                      }}>
                        <svg 
                              className="instagram-icon" 
                              viewBox="0 0 24 24" 
                              fill="white"
                              width="60" 
                              height="60"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                      </div>
                
                        </div>
                      </div>
                      </div>
                    ))
                  ) : (
                    // Show images for other portfolios
                    portfolioImages[portfolio]?.map((img, i) => (
                      <div className="col-md-4 col-6 col-sm-6 mb-4" key={i}>
                        <img
                          src={img}
                          alt={`${portfolio} ${i}`}
                          className="img-fluid portfolio-img"
                          onClick={() => setSelectedImage(img)}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <span className="close-btn">&times;</span>
            <img
              src={selectedImage}
              alt="Full View"
              className="modal-content-img"
            />
          </div>
        )}

        {/* Instagram Video Modal */}
        {selectedVideo && (
          <div className="image-modal video-modal" onClick={() => setSelectedVideo(null)}>
            <span className="close-btn">&times;</span>
            <div className="instagram-video-container" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={selectedVideo}
                className="instagram-video-iframe"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Instagram Video"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;