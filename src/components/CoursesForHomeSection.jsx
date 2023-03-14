import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import data from "../courses.json";

const CoursesForHomeSection = () => {
  const [courses, setCourses] = useState([]);
  const animationDelay = [200, 300, 400, 500, 600, 700];

  useEffect(() => {
    setCourses([data[0], data[4], data[7], data[8], data[11], data[12]]);
  }, []);

  return (
    <>
      <main className="my-5 container courses-for-home-section">
        <h1
          className="h1 text-center my-5 pt-5 fw-bold"
          style={{ fontWeight: "600" }}
        >
          Our Courses
        </h1>
        <div className="container d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {courses.map((item, i) => {
            return (
              <>
                <div
                  key={item.id}
                  className="card rounded-3"
                  style={{
                    width: "18rem",
                    border: "none",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={animationDelay[i]}
                  data-aos-duration="700"
                >
                  <LazyLoad height={200}>
                    <img
                      className="card-img-top"
                      src={item.img_uri}
                      alt={item.title}
                    />
                  </LazyLoad>

                  <div className="card-body">
                    <Link to={`/courses/${item.title}/${item.id}`}>
                      <h5 className="card-title p-2">
                        {item.title.substring(0, 22) +
                          (item.title.length > 22 ? "..." : "")}
                      </h5>
                    </Link>
                    <p className="card-text p-2">
                      {item.desc.substring(0, 122) +
                        (item.desc.length > 122 ? "..." : "")}
                    </p>
                    <Link
                      to={`/courses/${item.title}/${item.id}`}
                      data-id={item.id}
                      className="flex card-btn"
                    >
                      <div className="card__arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          height="22"
                          width="22"
                        >
                          <path
                            fill="#fff"
                            d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default CoursesForHomeSection;
