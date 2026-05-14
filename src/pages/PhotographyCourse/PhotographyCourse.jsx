import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function App() {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=500&h=300&fit=crop",
      title: " Photography Course",
      title1: "Basic + Advanced",
      buttonText: "VIEW DETAILS",
      link: "/PhotographyCourses",
    },
    // {
    //   image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=300&fit=crop",
    //   title: "PROFESSIONAL PHOTOGRAPHY COURSES (PART TIME)",
    //   buttonText: "VIEW DETAILS",
    //   link: "/courses/part-time"
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=500&h=300&fit=crop",
    //   title: "ADVANCED PHOTOGRAPHY COURSES",
    //   buttonText: "VIEW DETAILS",
    //   link: "/courses/advanced"
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&h=300&fit=crop",
    //   title: "WEDDING PHOTOGRAPHY MASTERCLASS",
    //   buttonText: "VIEW DETAILS",
    //   link: "/courses/wedding"
    // }
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
        }

        .photography-courses {
          padding: 40px 0;
        }

        .course-card {
          background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .course-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .card-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .course-card:hover .card-image img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 30px 20px;
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-title {
          font-size: 18px;
          font-weight: bold;
          color: #1a1a1a;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
          .card-title1 {
          font-size: 15px;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 20px;
        //   min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .view-details-btn {
          background-color: transparent;
          color: #1a1a1a;
          border: 2px solid #1a1a1a;
          padding: 12px 30px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 5px;
          text-transform: uppercase;
        }

        .view-details-btn:hover {
          background-color: #1a1a1a;
          color: #fff;
          transform: scale(1.05);
        }

        /* Responsive Design */
        @media (max-width: 1190px) {
          .card-title {
            font-size: 16px;
            min-height: 55px;
          }
            .card-title1 {
            font-size: 16px;
            min-height: 55px;
          }

          .card-content {
            padding: 25px 15px;
          }
        }

        @media (max-width: 991px) {
          .col-lg-3 {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .card-image {
            height: 220px;
          }

          .card-title {
            font-size: 15px;
            min-height: 50px;
          }
            .card-title1 {
            font-size: 15px;
            min-height: 50px;
          }
        }

        @media (max-width: 768px) {
          .photography-courses {
            padding: 30px 0;
          }

          .card-image {
            height: 200px;
          }

          .card-title {
            font-size: 14px;
            min-height: 45px;
          }
            .card-title1 {
            font-size: 14px;
            min-height: 45px;
          }

          .view-details-btn {
            padding: 10px 25px;
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .col-sm-12 {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .photography-courses {
            padding: 20px 0;
          }

          .card-image {
            height: 180px;
          }

          .card-content {
            padding: 20px 15px;
          }

          .card-title {
            font-size: 16px;
            min-height: auto;
          }
            .card-title1 {
            font-size: 16px;
            min-height: auto;
          }

          .view-details-btn {
            padding: 12px 30px;
            font-size: 14px;
          }
        }

        @media (max-width: 360px) {
          .card-image {
            height: 150px;
          }

          .card-title {
            font-size: 14px;
          }
            .card-title1 {
            font-size: 14px;
          }

          .view-details-btn {
            padding: 10px 20px;
            font-size: 12px;
          }

          .card-content {
            padding: 15px 10px;
          }
        }
      `}</style>
        <section className="TopBanner">
        <img src="/image/banner/banner2.webp" alt="image1"/>
      </section>

      <div className="photography-courses">
        <h1 className='FrontHeadSection'>COURSES</h1>
        <div className="container-fluid px-4">
          <div className="row">
            {courses.map((course, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="course-card">
        <div className="card-image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="card-content">
          <h2 className="card-title">{course.title}</h2>
          <h className="card-title1">{course.title1}</h>
          <Link to={course.link} className="view-details-btn CourseBtn">{course.buttonText}</Link>
        </div>
      </div>
    </div>
               ))}
          </div>
          </div>
      </div>
    </>
  );
}