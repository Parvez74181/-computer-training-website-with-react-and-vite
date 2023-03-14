import React from "react";
import bg from "../imgs/special-service-bg.svg";
const SpecialServices = () => {
  const services = [
    {
      title: "Pre-requisite Training",
      text: "If you don't have a basic understanding of the course before starting it, you can take our PreRequisite Training. After completing this course, you will receive a certificate and be able to start the main course.",
      delay: 100,
    },
    {
      title: "Lifetime Support",
      text: "We provide lifetime support for all courses, including access to materials and updates. Our goal is to ensure your learning success, and we're dedicated to providing value over the long-term.",
      delay: 250,
    },
    {
      title: "24/7 Support",
      text: "Experience the convenience of our 24/7 offline support and resources, available without the need for appointments. Trust our expert team for assistance with your needs, day or night, at any time.",
      delay: 300,
    },
    {
      title: "Practice",
      text: "Our Practice Lab Support provides you with access to real-world environments and tools to practice and apply your skills. Our expert support team is available to assist you throughout your learning journey.",
      delay: 350,
    },
    {
      title: "Review Class",
      text: "Our Review Class is a comprehensive session designed to reinforce key concepts and provide additional practice to help you solidify your understanding of the material covered in the course.",
      delay: 400,
    },
    {
      title: "CIT.Tools",
      text: "Our platform CIT.Tools provides access to premium software and resources, eliminating the need for paid tools. Available with all our courses and offers, it offers unlimited premium tools and resources.",
      delay: 450,
    },
  ];
  return (
    <>
      <main
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center mb-5">
          <h1
            className="h1 fw-bold"
            style={{ color: "var(--fourth-color)", fontWeight: "600" }}
            data-aos="fade-up"
          >
            Our Special Services
          </h1>
          <h5
            className="h5 text-center mx-auto"
            style={{ maxWidth: "800px", lineHeight: "30px" }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            We don't just offer classes, but also provide assistance to students
            in any need, at any time. That's why with our advanced courses, you
            get additional bonus benefits that are exclusively available from
            us.
          </h5>
        </div>
        <div
          className="container mb-5  flex"
          style={{ gap: "50px", flexWrap: "wrap" }}
        >
          {services.map((item, i) => {
            return (
              <>
                <div
                  className="card p-4 rounded-4"
                  style={{
                    width: "18rem",
                    color: "var(--primary-color)",
                    background: "rgba(255,255,255,0.9)",
                    border: "none",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={item.delay}
                  data-aos-duration="700"
                >
                  <h5
                    className="card-title fs-4 my-3 ps-1"
                    style={{ borderLeft: "2px solid var(--secondary-color)" }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      // color: "rgb(220,220,220)",
                      color: "var(--primary-color)",
                      lineHeight: "28px",
                      letterSpacing: "0px",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default SpecialServices;
