import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../style/Home.css';
import '../../style/ServiceDetails.css';


const WeddingVideographyAndPhotography = () => {
  const [activeService, setActiveService] = useState("");
  const navigate = useNavigate();

  const services = [
    { name: "Video productions", path: "/video-productions" },
    { name: "Digital media", path: "/digital-media" },
    { name: "Commercial", path: "/commercial" },
    { name: "Content creation", path: "/content-creation" },
    { name: "Creative directions", path: "/creative-directions" },
    { name: "Studio rental", path: "/studio-rental" },
  ];

  const handleClick = (service) => {
    setActiveService(service.name);
    navigate(service.path); // redirect to page
  };
  return (
  <>
    {/* <Header/> */}
     <section className="portfolio-page">
<img
          src="/image/demo/5rivban1.jpg"   // put your image path here
          alt="Product"
          className="media-item"
        />
    </section>
    <section className="ContactSection services-sections">
      <div className="container-fluid">
        <div className='ServicePadding SectionFrontSecondSection'>
             <h1 className='FrontHeadSection'>Studio on rent</h1>
        <p>Looking for a professional space to bring your creative ideas to visuals? Dream Byte Studio is a full-fledged studio on rent in Dehradun. Our studio is designed for photographers, filmmakers, content creators, and brands who want high quality photos and videos in a creative and decorated photo studio. We have modern equipment and a beautiful studio - It has modern lighting systems, a variety of backdrops, professional cameras, and sound-treated interiors. It is the ideal location to upgrade and provide your photos and videos with a professional appearance.</p>
        </div>
           <div className="media-container">
        {/* Image */}
        <img
          src="/image/demo/product (2).webp"   // put your image path here
          alt="Product"
          className="media-item"
        />
        {/* <img
          src="\image\demo\image2.jpg"   // put your image path here
          alt="Product"
          className="media-item"
        /> */}

        {/* Video */}
        {/* <video className="media-item" controls>
          <source src="/videos/product-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className='col-md-9'>
            <div className='quote-div SectionFrontSecondSection'>
                <h1 className="FrontHeadSection text-center mb-5">
                  Service Description
                </h1>
             <p className="">At Dream Byte Studio, we are aware that every project is different. That is why our rental photography studio service is flexible and customizable according to your requirements. You can book our studio for rent for an hour, half-day, or full day, and it also includes optional access to our technical crew for lighting, camera operation, and sound assistance.
              <br/>We provide an environment that boosts creativity, quality, and professional setups to carry out a full shoot of your project, regardless of whether it is an e-commerce product shoot, interviews, ad films, fashion shoots and model shoots, content creation, or podcasts.
            </p>
              <div className="quote-section">
              <div className="quote-icon">
               
              </div>
                {/* <h6 className="quote-text mb-0 ms-3">
                  Lorem Ipsum Dolor Sit Amet, Consec tuar Adipiscin<br/>
                  Elit In Augue Ligula, Feugiat Ut Nulla Consequat
                </h6> */}
                </div>
                 <div className='ServiceWrapper'>
                <div className='row'>
                  <div className='col-md-6'>
                    <h6 className="">
                Professional Space </h6>
                 <p>Our studio on rent includes a large and artistic 
                  studio facility to shoot any type of photography and videography.</p>
                  </div>
                   <div className='col-md-6'>
                    <h6 className="">
                    Fully Equipped</h6>
                    <p>We have a photo studio that has a creative theme, is well-equipped with professional lighting, technical equipment, and sound effects.</p>
                   </div>
                    <div className='col-md-6'>
                      <h6 className="">Flexible Rentals</h6>
                    <p>You can book our Studio on an hourly, half-day or full-day basis; we have flexible and customized timings suitable for your shoot.
                    </p>
                    </div>
                     <div className='col-md-6'>
                      <h6 className="">
                      Technical support</h6>
                      <p>Our service also includes a site team to support and guide you for the shoot for smooth execution.</p>
                      </div>
                     </div>
                </div>
                <hr></hr>
                <h1 className="FrontHeadSection text-center mb-5">
                  What’s included
                </h1>
                <ul>
                  <li>
                    <h4>Spacious Studio Area</h4>
                    <p className="">We have a spacious studio area designed for all kinds of shoots with enough space for photography and videography.</p>
                  </li>
                  <li>
                    <h4>Multiple Background Options</h4>
                    <p className="">White, black, chroma, and custom backdrops of various styles are available in our studio set-up.</p>
                  </li>
                  <li>
                    <h4> Top-quality gears</h4>
                    <p className="">We have professional and top-quality lighting, cameras and other gear to enhance your shoot quality.</p>
                  </li>
                  <li>
                    <h4>Technical Crew Assistance</h4>
                    <p className="">You can also have our assistance in your photo and video shoot from our team which is professional and trained.</p>
                  </li>
                </ul>
                <hr></hr>
                <section id="accordian" className="bsb-accordion-6 py-3 py-md-5 py-xl-8 FrontSecondSections">
      <h1 className="FrontHeadSection text-center mb-5">
        Frequently Asked Questions
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div className="accordion" id="accordionExample">
              {/* Item 1 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                  What types of shoots can be done in your studio?</button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">We have a studio on rent that is suitable for various kinds of shoots such as product shoots, fashion photography, podcast recordings, interviews, music videos, YouTube content and commercial video productions.
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                     Do you have an hourly or full-day rental service of a studio?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                 >
                  <div className="accordion-body accBody">
                   Yes, we have flexible time plans of our studio for rent and you can book it for either an hour, half day or full day. You can choose your time according to your requirements.
                  </div>
              </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Does it include lighting and photography equipment in the rental price?
                </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Yes, the basic lighting and the backdrops will be included in the studio booking and the professional cameras, lenses and the advanced lighting kits will also be provided as per your package, requirements and convenience.
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  > Is it possible to carry our own camera and equipment?
                 </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Absolutely! You are welcome to bring your own team, equipment or props. Our team will help you set up and maintain the equipment and props so that your shoot can proceed well.
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >What amenities are included in the studio rental ?
                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Our studio provides high-speed Wi-Fi, air conditioning, photography equipment and a makeup/dressing area for artists. You’ll also 
                    have access to a comfortable waiting lounge and space for your creative setup.                 </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </section>
            </div>
            
          </div>
          <div className="col-md-3">
      <div className="sticky-sidebar">
        <div className="services-card">
          <h5>More Services</h5>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                activeService === service.name ? "active" : "inactive"
              }`}
              onClick={() => handleClick(service)}
            >
              <i className="bi bi-arrow-right"></i> {service.name}
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
    {/* <Footer/> */}
    
    </>
  )
}


export default WeddingVideographyAndPhotography
