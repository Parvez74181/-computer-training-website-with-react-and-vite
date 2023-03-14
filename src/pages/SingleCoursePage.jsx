import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import forwardArrow from "../imgs/arrow-forward.svg";
import data from "../courses.json";
import Loading from "../components/Loading";

const SingleCoursePage = (props) => {
  const { updateProgress } = props;
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    updateProgress(0);
    updateProgress(100);
    // document.title = "Futurisers.com";
    const filteredCourse = data.filter((item) => item.id === id);
    setCourse(filteredCourse[0]);
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <div className="flex" style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      <main className="container single-course-page">
        {course ? (
          <>
            {/*  main heading content */}
            <div
              className="row flex g-5 "
              style={{ minHeight: "70vh", lineHeight: "30px" }}
            >
              <div
                className="col-12 col-md-12 col-lg-6 col-xl-6"
                data-aos="fade-up"
              >
                <h1 className="h1 my-4 fw-bold" style={{ fontSize: "2.4rem" }}>
                  {course.title}
                </h1>
                <p
                  style={{ fontSize: "18px" }}
                  dangerouslySetInnerHTML={{ __html: course.desc }}
                ></p>
                <div
                  className="buttons flex justify-content-between mt-4 flex-wrap"
                  style={{ gap: "30px" }}
                >
                  {/* Admission btn */}
                  <button className="btn">Admission</button>
                  {/* course fee btn */}
                  <button className="btn">
                    Course Fee: {course.course_fee}
                  </button>
                </div>
              </div>
              <div
                className="col-10 col-md-10 col-lg-6 col-xl-6 text-center"
                data-aos="fade-down"
              >
                <img
                  loading="lazy"
                  className="img-fluid"
                  style={{
                    position: "relative",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={course.img_uri}
                  alt={course.title}
                />
              </div>
            </div>

            {/* career opportunities container */}
            <div
              className="carrer-opportunity-container p-4 my-5 rounded-4"
              style={{
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <h1 className="h1 text-center">
                Career opportunities for this course
              </h1>
              <div className="row">
                {course?.career_opportunity?.map((item, i) => {
                  return (
                    <div
                      className="col-12 col-md-4 col-lg-4 col-xl-4 my-2 d-flex align-items-start"
                      key={i}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay={50 * i}
                      style={{ fontSize: "18px" }}
                    >
                      <img
                        src={forwardArrow}
                        alt="..."
                        style={{ width: "20px" }}
                      />
                      &nbsp;
                      {item}.
                    </div>
                  );
                })}
              </div>
            </div>

            {/* curriculum container */}
            <div
              className="curriculum-container p-4 my-5 rounded-4"
              style={{
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <h1 className="h1 text-center">Course Curriculum</h1>
              <div className="row">
                {course?.curriculum?.map((item, i) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                      key={i}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay={50 * i}
                      style={{ fontSize: "18px" }}
                    >
                      <img
                        src={forwardArrow}
                        alt="..."
                        style={{ width: "20px" }}
                      />
                      &nbsp;
                      {item}.
                    </div>
                  );
                })}
              </div>
            </div>

            {/* software container */}
            <div
              className="software-container p-4 my-5 rounded-4"
              style={{
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <h1 className="h1 text-center">Software</h1>
              <div className="row">
                {course?.software?.map((item, i) => {
                  return (
                    <div
                      className="col-6 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                      key={i}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay={50 * i}
                      style={{ fontSize: "18px" }}
                    >
                      <img
                        src={forwardArrow}
                        alt="..."
                        style={{ width: "20px" }}
                      />
                      &nbsp;
                      {item}.
                    </div>
                  );
                })}
              </div>
            </div>

            {/* who can learn container */}
            <div
              className="software-container p-4 my-5 rounded-4"
              style={{
                background: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              <h1 className="h1 text-center">Curriculum audiences</h1>
              <div className="row">
                {course?.who_can_learn?.map((item, i) => {
                  return (
                    <div
                      className="col-12 col-md-6 col-lg-6 col-xl-6 my-2 d-flex align-items-start"
                      key={i}
                      data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-delay={50 * i}
                      style={{ fontSize: "18px" }}
                    >
                      <img
                        src={forwardArrow}
                        alt="..."
                        style={{ width: "20px" }}
                      />
                      &nbsp;
                      {item}.
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </main>
    </>
  );
};

export default SingleCoursePage;
