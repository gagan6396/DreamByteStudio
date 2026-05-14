import '../../style/happy.css';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const WeddingGallery = () => {
  const [activeSection, setActiveSection] = useState('wedding');
  const sectionRefs = useRef({});

  const sections = [
    {
      id: 'wedding',
      icon: '💍',
      title: 'Wedding',
      shortTitle: 'Wedding',
      description: "From nervous smiles to tearful glances, the bride's parents watched their little girl step into a new chapter. Every detail came together flawlessly, turning emotions into memories and the day into magic.",
      color: '#C084FC',
      accentColor: '#9333EA'
    },
    {
      id: 'cocktail',
      icon: '🎤',
      title: 'Cocktail / Sangeet',
      shortTitle: 'Sangeet',
      description: 'The dance floor turned into a Bollywood dream — laughter, rhythm, and joy in every beat. Guests lived their filmy moment, celebrating love with glamour and groove.',
      color: '#FB7185',
      accentColor: '#E11D48'
    },
    {
      id: 'haldi',
      icon: '💛',
      title: 'Haldi & Bhaat',
      shortTitle: 'Haldi',
      description: 'What started as a "corporate bride\'s jhamela" soon became her favorite ritual — laughter, turmeric hues, and the warmth of family turned the ceremony into pure sunshine.',
      color: '#FBBF24',
      accentColor: '#F59E0B'
    },
    {
      id: 'mehendi',
      icon: '🌿',
      title: 'Mehendi',
      shortTitle: 'Mehendi',
      description: 'The bridesmaids turned the mehendi corner into their own little festival — giggles, vows of forever friendship, and playful promises that even the grooms couldn\'t top.',
      color: '#34D399',
      accentColor: '#10B981'
    }
  ];

  const generateImages = (sectionId) => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: `${sectionId}-${i + 1}`,
      url: `https://picsum.photos/400/600?random=${sectionId}-${i + 1}`,
      alt: `${sectionId} photo ${i + 1}`
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="wedding-gallery-main">
      {/* Hero Section with Buttons */}
      <section className="hero-buttons-section">
        <div className="hero-content-wrapper">
          <div className="hero-buttons-grid Weds">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`hero-btn WedsBtn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                style={{
                  '--btn-color': section.color,
                  '--btn-accent': section.accentColor
                }}
              >
                <span className="hero-btn-icon">{section.icon}</span>
                <span className="hero-btn-title">{section.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Navigation Bar */}
      <nav className="fixed-nav-bar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="nav-logo">✨</span>
            <span className="nav-title">Wedding Memories</span>
          </div>
          <div className="nav-buttons">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                style={{
                  '--btn-color': section.color,
                  '--btn-accent': section.accentColor
                }}
              >
                <span className="nav-btn-icon">{section.icon}</span>
                <span className="nav-btn-text">{section.shortTitle}</span>
                <span className="nav-btn-indicator"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-gallery-content">
        {sections.map((section) => {
          const images = generateImages(section.id);
          return (
            <section
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="gallery-section-block"
              id={section.id}
            >
              {/* Section Header */}
              <div className="section-header" style={{ '--section-color': section.color }}>
                <div className="section-header-content">
                  <div className="section-icon-large">{section.icon}</div>
                  <h2 className="section-title-main">{section.title}</h2>
                  <p className="section-description-main">{section.description}</p>
                  <div className="section-meta">
                    <span className="meta-badge">
                      <span className="badge-icon">📷</span>
                      20 Photos
                    </span>
                    <span className="meta-badge">
                      <span className="badge-icon">❤️</span>
                      {section.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Gallery Grid */}
              <div className="container-fluid px-4 py-5">
                <div className="row g-4">
                  {images.map((image, index) => (
                    <div key={image.id} className="col-lg-3 col-md-6 col-sm-12">
                      <div 
                        className="photo-card"
                        style={{ 
                          '--card-color': section.color,
                          animationDelay: `${index * 0.05}s`
                        }}
                      >
                        <div className="photo-card-inner">
                          <img src={image.url} alt={image.alt} className="photo-img" />
                          <div className="photo-overlay" style={{ background: `linear-gradient(180deg, transparent 0%, ${section.accentColor}ee 100%)` }}>
                          </div>
                          <div className="photo-corner" style={{ background: section.color }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
};

export default WeddingGallery;
