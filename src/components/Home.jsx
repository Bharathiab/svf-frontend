import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "./Footer";
import Navbar from './Navbar';


const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    // Initialize Bootstrap Carousel for autoscrolling
    if (window.bootstrap && window.bootstrap.Carousel) {
      const carouselElement = document.getElementById('heroCarousel');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: 'carousel'
        });
      }
    }

    const counters = document.querySelectorAll(".counter");

    const isInViewport = (elem) => {
      const rect = elem.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const runCounters = () => {
      counters.forEach((counter) => {
        if (!counter.classList.contains("counted") && isInViewport(counter)) {
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const increment = target / 200;

          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
          counter.classList.add("counted"); // prevent re-running
        }
      });
    };

    window.addEventListener("scroll", runCounters);
    runCounters(); // run once in case already visible

    return () => window.removeEventListener("scroll", runCounters);
  }, []);

  return (
    <div className={`fade-in-container${fadeIn ? " fade-in" : ""}`}>
      <React.Fragment>
        <Navbar />

        {/* Hero Carousel */}
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide d-flex align-items-center" style={{ backgroundImage: "url('./new1.jpg')" }}>
                <div className="container text-center text-white">
                  <p className="lead">GET YOUR DREAM HOME CONSTRUCTED BY THE EXPERTS</p>
                  <h1 className="display-0 fw-bold">A RESIDENTIAL CONSTRUCTION COMPANY</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide d-flex align-items-center" style={{ backgroundImage: "url('./new2.jpg')" }}>
                <div className="container text-center text-white">
                  <p className="lead">WE BUILD MODERN HOMES WITH STYLE</p>
                  <h1 className="display-0 fw-bold">DESIGNED FOR YOUR LIFESTYLE</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide d-flex align-items-center" style={{ backgroundImage: "url('./new7.jpg')" }}>
                <div className="container text-center text-white">
                  <p className="lead">QUALITY. TRUST. EXCELLENCE.</p>
                  <h1 className="display-0 fw-bold">BUILDING HOMES WITH PASSION</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
  <br></br><hr></hr>
         {/* Why SVF Section */}
        <section className="py-5 text-center" style={{ backgroundColor: " #d52828ff", color: "white" }}>
          <div className="container">
            <h2 className="fw-bold mb-4">Why SVF ?</h2>
            <div className="row g-4">
              {[
                { label: "Years of Experience", target: 17 },
                { label: "Completed Projects", target: 1300 },
                { label: "Ongoing Projects", target: 300 },
                { label: "Full Time Employees", target: 350 },
                { label: "Construction Workers", target: 4000 },
                { label: "Offices in 5 Cities", target: 8 },
                { label: "Years Structural Warranty", target: 10 },
                { label: "Quality Checks", target: 425 },
              ].map((item, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <h3 className="fw-bold">
                    <span className="counter" data-target={item.target}>0</span>
                    {item.target > 10 ? "+" : ""}
                  </h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  <hr></hr>

        {/* Locations */}
        <section className="py-5 text-center">
          <h5 className="fw-bold mb-4">Visit Our Experience Center @</h5>
          <div className="container">
            <div className="row g-3 justify-content-center">
              {["Ambattur", "Anna Nagar", "Tambaram", "Hyderabad", "Pondicherry"].map((loc, idx) => (
                <div className="col-6 col-md-2" key={idx}>
                  <div className="location-card card p-3 text-dark shadow-sm">
                    <h6 className="fw-bold">{loc}</h6>
                    <small>{loc === "Hyderabad" ? "Gachibowli" : "Chennai"}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Home Construction Packages */}
        <section className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold mb-4">Our Home Construction Packages</h2><br />
            <div className="row g-3 justify-content-center">
              {["BASIC", "STANDARD", "PREMIUM", "ULTRA LUXURY"].map((pkg, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <Link to={`/construction-package#${pkg.toLowerCase().replace(/\s/g, '-')}`} style={{ textDecoration: "none" }}>
                    <div className="package-card" style={{ cursor: "pointer" }}>
                      <h6 className="fw-bold" style={{ backgroundColor: "yellowgreen", color: "white" }}>{pkg} PACKAGE</h6>
                      <div className="underline" style={{ height: "2px", backgroundColor: "white", marginTop: "5px" }}></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div><br />
            <div className="mt-4">
              <Link to="/construction-package" className="btn px-4 py-2 fw-bold rounded-pill shadow-sm" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>
                VIEW ALL PACKAGES
              </Link>
            </div><br />
            <small className="text-muted d-block mt-2">* Note: Minimum overall built-up area should be 2000 sqft.</small>
          </div>
        </section>


         {/* Services Section */}
        <section className="services-section text-center">
          <div className="container">
            <p className="text-muted">WHAT WE DO?</p>
            <h2>SERVICES <span className="fw-bold">WE OFFER</span></h2>
            <div className="row g-4 mt-4">
              {[
                { img: "11.png", title: "Architectural Designs", desc: "Creative & functional design plans." },
                { img: "12.png", title: "Residential Construction", desc: "High-quality homes with modern finish." },
                { img: "13.png", title: "Interior Designs", desc: "Stylish interiors for comfort & beauty." },
              ].map((service, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="service-box bg-white">
                    <img src={`./${service.img}`} width="60" alt="" /><br /><br />
                    <h5>{service.title}</h5>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Cost Calculator */}
        <section className="py-5 text-center bg-light">
          <div className="container">
            <h2 className="fw-bold mb-4">Home Construction Cost Calculator (2025)</h2><br />
            <a href="#" className="btn btn-warning px-4 py-3 fw-bold rounded-pill shadow-sm" style={{ backgroundColor: " yellowgreen", color: "white" }}>
              ARRIVE YOUR HOME CONSTRUCTION COST HERE
            </a>
          </div>
        </section>

        {/* Completed Site Pictures */}
        <section className="py-5 text-center">
          <div className="container">
            <h2 className="fw-bold">Our Completed Signature Projects</h2><br />
            <p className="text-muted">Actual Pictures</p><br />
            <div className="row g-3">
              {["new2.jpg","new3.jpg","new6.jpg","new5.jpg","new6.jpg","new7.jpg","new2.jpg","new4.jpg"].map((img, idx) => (
                <div className="col-12 col-md-6 col-lg-3" key={idx}>
                  <img src={`./${img}`} className="img-fluid rounded shadow-sm" alt={`Completed Site ${idx+1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>


      </React.Fragment>
      <Footer />
    </div>
  );
};

export default Home;
