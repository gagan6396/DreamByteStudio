import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/course.css';
import '../../style/contactUs.css';
import "../../style/portfolio.css";
import '../../style/home.css';

const coursesDetail = () => {
  const [activeModule, setActiveModule] = useState('basic');

  const basicTopics = [
    'Introduction to Photography',
    'Understanding the Camera',
    'Image Fundamentals',
    'Composition & Elements',
    'Lighting Techniques',
    'Camera Modes & Formats',
    'Introduction to Videography',
    'Color Control & White Balance',
    'Use of Tripod & Accessories',
    'Shooting in RAW & JPEG',
    'Videography Essentials',
    'Advanced Videography Techniques',
    'Editing & Retouching (Lightroom)',
    'Post-Processing & Workflow',
    'Professional Development',
    'Real-World Projects & Practical Sessions',
  ];

  // const advancedTopics = [
  //   'Professional-Level Photography',
  //   'Advanced Camera & Technical Mastery',
  //   'Advanced Lighting Techniques',
  //   'Advanced Composition & Storytelling' ,
  //   'Professional Development',
  //   'Specialized Photography Styles',
  //   'Post-Processing & Editing',
  //   'Advanced Videography',
  //   'Advanced Lightroom (Editing & Retouching)',
  //   'Use of Tripod',
  //   'Color Control & White Balance',
  //   'Benefits of Shooting in RAW & JPEG Format'
  // ];

  const courseDetails = [
    { icon: '📅', label: 'Duration', value: '3 Months' },
    { icon: '👥', label: 'Mode', value: 'In Person' },
    { icon: '💰', label: 'Fees', value: '₹50,000' },
    { icon: '🎓', label: 'Eligibility', value: 'Open to All' }
  ];

  const whyChoose = [
    {img:'/image/demo/Erikae.com/4.webp',
      label:'Covers basic to advanced levels in one complete course',
    },
     {img:'/image/demo/Happy.png',
      label:'Learn both photography and videography fundamentals',
    },
     {img:'/image/demo/Happy.png',
      label:'Learn from industry professionals with real-world experience',
    },
     {img:'/image/demo/Happy.png',
      label:'Includes hands-on practical sessions on real projects',
    },
     {img:'/image/demo/Happy.png',
      label:'Master editing in Premiere Pro, Adobe Lightroom',
    },
     {img:'/image/demo/Happy.png',
      label:'Build your own portfolio and develop creative identity',
    },
  ];

  return (
    <div className="photography-course">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title">Capture the World Through Your Lens</h1>
              <p className="courseParagraph">
                Unlock your creative potential and take your photography skills from beginner to professional level in Dehradun
              </p>
              {/* <div className="hero-buttons">
                <button className="btn btn-primary btn-lg me-3">Enroll Now</button>
                <button className="btn">Learn More</button>
              </div> */}
              <div className="hero-badge">Basic + Advanced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="course-details-section py-5">
        <div className="container">
          <div className="row g-4">
            {courseDetails.map((detail, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="detail-card">
                  <div className="detail-icon">{detail.icon}</div>
                  <h5 className="detail-label">{detail.label}</h5>
                  <p className="detail-value">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="overview-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="FrontHeadSection text-center mb-4">Course Overview</h2>
              <p className="courseParagraph">
                Photography is more than just clicking pictures - It's about representing the world with your creativity and telling the story through a lens. In our Photography Course in Dehradun you will learn about the fundamentals of photography, how to control cameras, the techniques that make great photos stand out and we also provide the opportunity to work on real projects with our Dream Byte Solutions team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="structure-section py-5">
        <div className="container">
          <h1 className="FrontHeadSection text-center mb-4">Course Structure</h1>
            <h3 className='text-center mb-3'> Basic + Advanced Photography Course</h3>
            <h5 className='text-center mb-5'>From Beginner to Professional — Master the Complete Art of Photography & Videography</h5>
          {/* Module Tabs */}
          <div className="module-tabs mb-4">
            <button 
              className={`module-tab ${activeModule === 'basic' ? 'active' : ''}`}
              onClick={() => setActiveModule('basic')}
            >
              Topics Covered
            </button>
            {/* <button 
              className={`module-tab ${activeModule === 'advanced' ? 'active' : ''}`}
              onClick={() => setActiveModule('advanced')}
            >
              Advanced Photography Module
            </button> */}
          </div>

          {/* Module Content */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {activeModule === 'basic' && (
                <div className="module-content">
                  <p className="courseParagraph mb-4">
                   This all-in-one course takes you from the basics to advanced techniques, covering photography, videography, lighting, editing,
                   and professional development — everything you need to become a skilled visual creator.
                  </p>
                  <div className="row g-3">
                    {basicTopics.map((topic, index) => (
                      <div key={index} className="col-md-6">
                        <div className="topic-card">
                          <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
                          <div className="courseParagraph">{topic}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeModule === 'advanced' && (
                <div className="module-content">
                  <p className="courseParagraph">
                    Take your skills to the next level with advanced techniques, professional tools, and real project experience. Learn how to shoot for clients, develop your personal style, and create visually powerful stories.
                  </p>
                  <div className="row g-3">
                    {advancedTopics.map((topic, index) => (
                      <div key={index} className="col-md-6">
                        <div className="topic-card">
                          <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
                          <div className="courseParagraph">{topic}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="included-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="FrontHeadSection text-center mb-4">What's Included</h2>
              <div className="included-box">
                <p className="courseParagraph">
                  <strong>✓</strong> Real projects with Dream Byte Solutions team<br/>
                  <strong>✓</strong> Professional studio setting (indoor)<br/>
                  <strong>✓</strong> Location photography (Outdoor)<br/>
                  <strong>✓</strong> Professional setups and lighting gear<br/>
                  <strong>✓</strong> After Effects and Premiere Pro training
                </p>
                <p className="courseParagraph">
                  <strong>What you need:</strong> Laptop (Camera - not mandatory)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section py-5">
        <div className="container">
          <h2 className="FrontHeadSection text-center mb-5">Why Choose Our Photography Course in Dehradun</h2>
          <div className="row g-4">
            {whyChoose.map((reason, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="reason-card">
                  <div className="reason-icon">
  <img src={reason.img} alt={reason.label} className="img-fluid" />
</div>

                  <p className="courseParagraph">{reason.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <section className="ContactUsLooking">
        <div className="ContactOverlay"></div>
        <div className="container">
          <div className="ContactWork">
            <div className="contactBlock">
              <h5 className="FrontHeadSection">Enroll Now</h5>
            </div>
           <p className="courseParagraph"> Turn your passion into a professional skill and your skill into art.</p>
              <p className="courseParagraph"> Get in touch with us with any query.</p>
            {/* ✅ Hire Us Button opens mail */}
            <a href="mailto:pantprachi58@gmail.com" className="btn ContactBtn">
              Hire Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default coursesDetail;
