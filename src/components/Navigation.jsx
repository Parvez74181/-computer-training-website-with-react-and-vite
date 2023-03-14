import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styleSheet/navigation.min.css";

const Navigation = () => {
  const nav_items = [
    { path: "/", icon: "home", value: "Home" },
    { path: "/courses", icon: "book", value: "Courses" },
    { path: "/about", icon: "information-circle", value: "About" },
    { path: "/contact", icon: "navigate", value: "Contact" },
  ];
  useEffect(() => {
    let nav_links = document.querySelectorAll(".secondary-nav li");
    function activeLink() {
      nav_links.forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
    }
    nav_links.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
  }, []);

  return (
    <>
      <header>
        {/* primary-nav */}
        <nav className="primary-nav flex container">
          <div className="logo-box">
            <NavLink exact={true.toString()} to="/" className="fs-3">
              <img src="Logo" alt="logo" />
            </NavLink>
          </div>
          <div className="nav-links">
            <ul className="flex">
              {nav_items.map((item, i) => {
                return (
                  <>
                    <li key={i} className="nav-item">
                      <NavLink
                        className="fs-5"
                        exact={true.toString()}
                        to={item.path}
                      >
                        {item.value}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>

      <nav className="secondary-nav fixed-bottom">
        <ul className="flex">
          {nav_items.map((item, i) => {
            return (
              <>
                <li key={i} className="nav-item">
                  <NavLink exact={true.toString()} to={`${item.path}`}>
                    <ion-icon name={item.icon}></ion-icon>
                  </NavLink>
                  <div className="indicator"></div>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
