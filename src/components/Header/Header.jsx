import { useState } from "react";
import vitlogo from "../../assets/vitlogo.png";
import "./Header.css";
import visionImg from "../../assets/vision.png";
import leaderImg from "../../assets/leadership.png";
import govImg from "../../assets/govt.png";
import contactImg from "../../assets/contact.png";
import faqImg from "../../assets/faq.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Vision & Mission");

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAboutClick = () => {
    setIsAboutOpen((prev) => !prev);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const sectionImages = {
    "Vision & Mission": visionImg,
    "Leadership": leaderImg,
    "Governance": govImg,
    "Contact Us": contactImg,
    "FAQ": faqImg,
  };

  return (
    <header>
      {/* Top Header */}
      <div className="top-header d-flex justify-content-between align-items-center">
        <div className="top-h-left d-flex align-items-center gap-2">
          {isAboutOpen ? (
            <>
              <span>AP</span>
              <span>VELLOR</span>
              <span>CHENNAI</span>
              <span>BHOPAL</span>
              <span>BANGALORE</span>
            </>
          ) : (
            <>
              <span className="bi bi-bank2"></span>
              <span>CAMPUS</span>
              <span className="bi bi-chevron-right"></span>
            </>
          )}
        </div>

        <div className="top-h-right d-flex align-items-center gap-3">
          <span>Alumini</span>
          <span>VIT-AP Advantages</span>
          <span className="bi bi-search"></span>
          <span className="bi bi-server"></span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-3 nav-top" >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            <img src={vitlogo} alt="VIT Logo" width="140" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isMenuOpen}
            style={{color:'white', border:'2px solid white'}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 text-center">
              {[
                { label: "About" },
                { label: "Admission" },
                { label: "Academics" },
                { label: "Career Development Center" },
                { label: "Campus Life" },
                { label: "Research" },
              ].map((item) => (
                <li
                  className="nav-item nev-head"
                  style={{ fontSize: "20px" }}
                  key={item.label}
                >
                  <a
                    className={`nav-link text-white ${
                      item.label === "About" && isAboutOpen ? "text-decoration-underline" : ""
                    }`}
                    href="#"
                    onClick={(e) => {
                      if (item.label === "About") {
                        e.preventDefault();
                        handleAboutClick();
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Popup */}
      {isAboutOpen && (
        <div
          className="position-fixed top-50 start-50 translate-middle bg-white shadow-lg p-4 rounded w-75"
          style={{ zIndex: 1050 }}
          onDoubleClick={() => setIsAboutOpen(false)}
        >
          <div className="row">
            {/* Left List */}
            <div className="col-md-4 border-end pe-3">
              {Object.keys(sectionImages).map((section) => (
                <div
                 style={{fontSize:'22px', marginTop:'15px'}}
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  onMouseEnter={() => handleSectionChange(section)}
                  className={`py-2 fw-semibold cursor-pointer text-dark    ${
                    selectedSection === section ? "text-decoration-underline" : ""
                  }`}
                >
                  {section}
                </div>
              ))}
            </div>

            {/* Right Image */}
            <div className="col-md-8">
              <img
               src={sectionImages[selectedSection]}
                alt={selectedSection}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}