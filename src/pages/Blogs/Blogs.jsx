import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/blogs.css";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import '../../style/home.css';
import { Link } from "react-router-dom";

const Blog = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toISOString().replace("T", " ").slice(0, 19);
    setCurrentTime(formatted);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Street Cinematography : Indian Streets & Night Photography",
      image: "/image/demo/Jaivik e.com/2.webp",
      link: "/blogs/BlogDetail", 
    },
    {
      id: 2,
      title: "Professional Photo Shoot Ideas by Dream Byte Studio",
      image: "/image/demo/Jaivik e.com/2.webp",
      link: "/blogs/BlogDetail2", 
    },
  ];

  return (
    <>
    {/* <Header/> */}
   <section className="TopBanner">
        <img src="/image/banner/blog.webp" alt="image1"/>
      </section>
    <section className="ContactSection">
         <div className="container">
     <h1 className='FrontHeadSection'>Blogs</h1>
      <div className="row g-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-lg-3 col-md-6 col-sm-12">
            <div className="blog-card">
              <div className="blog-img-wrapper">
                 <Link to="/blogs/future-of-ai" className="read-more">
                <img src={blog.image} alt={blog.title} className="blog-img" />
                </Link>
                <span className="blog-date">{currentTime}</span>
              </div>
              <div className="blog-overlay">
                 <Link  to={blog.link} className="read-more">
                <h5 className="blog-title">{blog.title}</h5>
               
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
   {/* <Footer/> */}
    </>
  );
};

export default Blog;
