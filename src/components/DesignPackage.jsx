import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Designpackage.css";
import { Container, Row, Col, Button, Card, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DesignPackage = () => {
  const designCards = [
    { id: "01", title: "Site Plan", img: "Luxury home.jpg", alt: "Site Plan" },
    {
      id: "02",
      title: "Architectural Floor Plan",
      img: "Luxury home.jpg",
      alt: "Architectural Floor Plan",
    },
    {
      id: "03",
      title: "3D Half Layout",
      img: "Luxury home.jpg",
      alt: "3D Half Layout",
    },
    {
      id: "04",
      title: "Structural Drawing",
      img: "Luxury home.jpg",
      alt: "Structural Drawing",
    },
    {
      id: "05",
      title: "Elevation 3D Design",
      img: "Luxury home.jpg",
      alt: "Elevation 3D Design",
    },
    {
      id: "06",
      title: "Approval Drawing",
      img: "Luxury home.jpg",
      alt: "Approval Drawing",
    },
  ];
  const packagesData = [
    {
      title: "BASIC PACKAGE",
      price: "1999",
      content: {
        Design: ["SCHEME DRAWING : ALL FLOORS (2D)", "ELEVATION DESIGN : (3D)"],
        "Project Management": [
          "Project Planning",
          "Timeline Management",
          "Budget Control",
        ],
        Structure: [
          "Foundation Work",
          "Column and Beam Construction",
          "Roofing",
        ],
        "Bathroom & Plumbing": [
          "Sanitary Fittings",
          "Water Supply Lines",
          "Drainage System",
        ],
        Flooring: ["Tile Laying", "Grouting", "Floor Leveling"],
        "Kitchen & Dining": [
          "Cabinet Installation",
          "Countertop Setup",
          "Appliance Placement",
        ],
        "Door, Windows and Railing": [
          "Door Frames",
          "Window Installation",
          "Balcony Railing",
        ],
        Painting: [
          "Wall Preparation",
          "Primer Application",
          "Final Paint Coat",
        ],
        Electrical: [
          "Wiring Installation",
          "Switch and Socket Setup",
          "Lighting Fixtures",
        ],
        "What's Not Included": ["Furniture", "Appliances", "Landscaping"],
      },
    },
    {
      title: "STANDARD PACKAGE",
      price: "2199",
      content: {
        Design: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
        ],
        "Project Management": [
          "Detailed Project Scheduling",
          "Quality Assurance",
          "Client Coordination",
        ],
        Structure: [
          "Reinforced Concrete Work",
          "Brick Masonry",
          "Slab Construction",
        ],
        "Bathroom & Plumbing": [
          "Premium Sanitary Ware",
          "Hot Water System",
          "Water Purification",
        ],
        Flooring: ["Marble Flooring", "Skirting Installation", "Polishing"],
        "Kitchen & Dining": [
          "Modular Kitchen Setup",
          "Dining Area Layout",
          "Storage Solutions",
        ],
        "Door, Windows and Railing": [
          "Wooden Doors",
          "UPVC Windows",
          "Safety Railing",
        ],
        Painting: [
          "Texture Painting",
          "Wallpaper Application",
          "Ceiling Painting",
        ],
        Electrical: [
          "Concealed Wiring",
          "Home Automation Setup",
          "Generator Connection",
        ],
        "What's Not Included": [
          "Custom Furniture",
          "High-End Appliances",
          "Swimming Pool",
        ],
      },
    },
    {
      title: "PREMIUM PACKAGE",
      price: "2499",
      content: {
        Design: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)",
        ],
        "Project Management": [
          "Advanced Project Monitoring",
          "Risk Management",
          "Sustainability Planning",
        ],
        Structure: [
          "Earthquake Resistant Design",
          "High-Quality Cement",
          "Steel Reinforcement",
        ],
        "Bathroom & Plumbing": [
          "Designer Tiles",
          "Rainwater Harvesting",
          "Solar Water Heater",
        ],
        Flooring: [
          "Italian Marble",
          "Carpet Installation",
          "Anti-Skid Treatment",
        ],
        "Kitchen & Dining": [
          "Island Kitchen",
          "Pantry Setup",
          "Dining Nook Design",
        ],
        "Door, Windows and Railing": [
          "Teak Wood Doors",
          "French Windows",
          "Glass Railing",
        ],
        Painting: ["Designer Paints", "False Ceiling Painting", "Accent Walls"],
        Electrical: [
          "Smart Home Integration",
          "Backup Power System",
          "LED Lighting",
        ],
        "What's Not Included": [
          "Luxury Furniture",
          "Imported Appliances",
          "Home Theater",
        ],
      },
    },
    {
      title: "ULTRA LUXURY",
      price: "2999",
      content: {
        Design: [
          "SCHEME DRAWING : ALL FLOORS (2D)",
          "ELEVATION DESIGN : (3D)",
          "HALF LAYOUT : ALL FLOORS (3D)",
          "ELECTRICAL DRAWINGS : ALL FLOORS (2D)",
          "PLUMBING DRAWING : ALL FLOORS (2D)",
          "WORKING DRAWING : ALL FLOORS (2D)",
          "SOIL TEST REPORT",
          "STRUCTURAL DRAWINGS",
          "FURNITURE LAYOUT : ALL FLOORS (2D)",
          "ELEVATION DETAIL DRAWING : (2D)",
          "SITE ASSESSMENT & SITE PLAN",
          "INTERIOR VIEWS : ALL FLOORS (3D)",
          "INTERIOR DETAILING : ALL ROOMS (2D)",
          "INTERIOR 3D WALK-THROUGH",
          "APPROVAL DRAWING",
          "LANDSCAPING ARCHITECTURAL DESIGNS",
        ],
        "Project Management": [
          "VIP Client Management",
          "24/7 Supervision",
          "Green Building Certification",
        ],
        Structure: [
          "Premium Materials",
          "Advanced Construction Tech",
          "Aesthetic Finishes",
        ],
        "Bathroom & Plumbing": [
          "Jacuzzi Installation",
          "Smart Plumbing",
          "Heated Floors",
        ],
        Flooring: [
          "Exotic Wood Flooring",
          "Heated Flooring",
          "Custom Patterns",
        ],
        "Kitchen & Dining": [
          "Chef's Kitchen",
          "Wine Cellar",
          "Formal Dining Setup",
        ],
        "Door, Windows and Railing": [
          "Custom Doors",
          "Panoramic Windows",
          "Designer Railing",
        ],
        Painting: ["Luxury Finishes", "Murals and Art", "Special Effects"],
        Electrical: [
          "Full Automation",
          "Solar Integration",
          "Entertainment System",
        ],
        "What's Not Included": [
          "Personalized Art",
          "Rare Artifacts",
          "Private Jet",
        ],
      },
    },
  ];
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (pkgIndex, section) => {
    setOpenSections((prev) => ({
      ...prev,
      [pkgIndex]: {
        ...prev[pkgIndex],
        [section]: !prev[pkgIndex]?.[section],
      },
    }));
  };

  return (
    <>
      <Navbar />
      <div className="designpackage">
        <div className="packages-section my-5 px-3">
          <div className="container text-center">
            <br></br>
            <h2 className="h2 mt-5 mb-3">OUR ARCHITECTURAL DESIGN PACKAGES</h2>
            <p
              className="description with-line mx-auto"
              style={{ maxWidth: "800px" }}
            >
              All designs will be done by a team of Architects, Civil engineers,
              Structural Engineers, 3D Visualizers and Project managers.
              <br />
              Ensuring both Creativity and Practicality for Construction.
            </p>
          </div>
        </div>
        <div className="container-fluid my-4 px-3">
          <div className="table-responsive">
            <table
              className="table table-bordered text-center align-middle shadow-lg"
              style={{ minWidth: "800px" }}
            >
              <thead>
                <tr>
                  <th>Select Your Architectural Design Package</th>
                  <th className="basic">
                    BASIC <br />
                    <span>₹45 per sqft</span> <br />
                    <small>Concept Design</small>
                  </th>
                  <th className="standard">
                    STANDARD <br />
                    <span>₹95 per sqft</span> <br />
                    <small>Concept Design + Working Drawings</small>
                  </th>
                  <th className="premium">
                    PREMIUM <br />
                    <span>₹140 per sqft</span> <br />
                    <small>Concept Design + Working Drawings + Interior</small>
                  </th>
                  <th className="ultra">
                    ULTRA PREMIUM <br />
                    <span>₹240 per sqft</span> <br />
                    <small>
                      Concept Design + Working Drawings + Interior + Material
                      Selection
                    </small>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SCHEME DRAWING : ALL FLOORS (2D)", "✔", "✔", "✔", "✔"],
                  ["FURNITURE LAYOUT : ALL FLOORS (2D)", "✔", "✔", "✔", "✔"],
                  ["ELEVATION DESIGN (3D)", "✔", "✔", "✔", "✔"],
                  ["ELECTRICAL DRAWINGS : ALL FLOORS (2D)", "✖", "✔", "✔", "✔"],
                  ["PLUMBING DRAWING : ALL FLOORS (2D)", "✖", "✔", "✔", "✔"],
                  ["WORKING DRAWING : ALL FLOORS (2D)", "✖", "✔", "✔", "✔"],
                  ["SOIL TESTING REPORT", "✖", "✔", "✔", "✔"],
                  ["STRUCTURAL DRAWINGS", "✖", "✔", "✔", "✔"],
                  ["SITE ASSESSMENT & SITE PLAN", "✖", "✔", "✔", "✔"],
                  ["ELEVATION DETAIL DRAWING (2D)", "✖", "✖", "✔", "✔"],
                  ["HALF LAYOUT : ALL FLOORS (3D)", "✖", "✖", "✔", "✔"],
                  ["INTERIOR VIEWS : ALL ROOMS (3D)", "✖", "✖", "✔", "✔"],
                  ["INTERIOR DETAILING : ALL ROOMS (2D)", "✖", "✖", "✔", "✔"],
                  ["MATERIAL & BRAND SELECTION", "✖", "✖", "✖", "✔"],
                  ["LANDSCAPING ARCHITECTURE DESIGNS", "✖", "✖", "✖", "✔"],
                  ["TOPOGRAPHICAL SURVEY", "✖", "✖", "✖", "✔"],
                  ["APPROVAL DRAWING", "✖", "✖", "✖", "✔"],
                  ["OFFICE VISITS", "✖", "✖", "Max 4", "Max 8"],
                  ["CONSTRUCTION QUOTATION", "✖", "✖", "✔", "✔"],
                  ["INTERIOR QUOTATION", "✖", "✖", "✔", "✔"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr className="delivery-time">
                  <td>DELIVERY TIME</td>
                  <td>6 Working Days</td>
                  <td>20 Working Days</td>
                  <td>30 Working Days</td>
                  <td>45 Working Days</td>
                </tr>
                <tr className="buttons">
                  <td></td>
                  <td>
                    
                      <button className="btn btn-warning btn-sm" onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }>
                        Book Now
                      </button>
                   
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }
                    >
                      Book Now
                    </button>
                  </td>
                  <td>
                      <button className="btn btn-warning btn-sm" onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }>
                        Book Now
                      </button>
                    
                  </td>
                  <td>
                    
                      <button className="btn btn-warning btn-sm" onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }>
                        Book Now
                      </button>
                   
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Note Section */}
        <section className="note-section container my-4 px-3">
          <h3 className="mb-3">Note:</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Site Supervision & Construction Support not included
            </li>
            <li className="list-group-item">
              Minimum Built-up area should be 1800 sqft
            </li>
            <li className="list-group-item">
              Initial site Assessment visit will be done only for Sites in
              Chennai, Bangalore, Hyderabad, Pondicherry and Coimbatore
            </li>
            <li className="list-group-item">
              Dedicated web and app access for 4 years
            </li>
            <li className="list-group-item">
              2-Sets of A3 Printed hard copies will be provided
            </li>
          </ul>
        </section>

        {/* Our 3D Designs Section */}
        <section className="py-3 py-md-5 mb-4 mb-md-5">
          <Container>
            <h2 className="text-center mb-3 mb-md-5">OUR 3D DESIGNS</h2>
            <Row className="g-3 g-md-4 justify-content-center">
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new2.jpg"
                  alt="3D Design 1"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new6.jpg"
                  alt="3D Design 2"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new4.jpg"
                  alt="3D Design 3"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new5.jpg"
                  alt="3D Design 4"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new3.jpg"
                  alt="3D Design 5"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
              <Col xs={12} sm={6} md={4} lg={4}>
                <img
                  src="./new7.jpg"
                  alt="3D Design 6"
                  loading="lazy"
                  className="img-fluid rounded shadow-sm"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Enquire Form */}
        <div
          className="enquire-container"
          style={{ background: "url(/10.1.png) center/cover no-repeat" }}
        >
          <div
            className="enquire-content mx-auto"
            style={{ maxWidth: "570px", width: "100%" }}
          >
            <h2 className="free-quote-heading text-center mb-4">
              GET A FREE QUOTE
            </h2>

            <div className="enquire-box p-4 shadow-sm rounded">
              <h2 className="text-center mb-3">Enquire Now</h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name *"
                    required
                    className="form-control"
                  />
                </div>

                {/* Country Code + Mobile */}
                <div className="mb-3 d-flex">
                  <select
                    name="countryCode"
                    className="form-select form-control me-2"
                    style={{
                      maxWidth: "100px",
                      height: "100%",
                      padding: "10px",
                    }}
                    required
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID *"
                    required
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Message *"
                    rows="4"
                    required
                    className="form-control"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-warning px-4"
                    onClick={() => (window.location.href = "tel:+918122876119")}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <h2 className="text-center fw-bold mb-4">Our Design</h2>

          <div
            id="designCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 design-box">
                  <div className="design-number">01</div>
                  <div className="design-description">Site Plan</div>
                </div>
                <img
                  src="/t2.1.png"
                  className="d-block w-100 mx-auto img-fluid"
                  alt="Site Plan"
                />
              </div>

              {/* Slide 2 */}
              <div className="carousel-item text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 design-box">
                  <div className="design-number">02</div>
                  <div className="design-description">
                    Architectural Floor Plan
                  </div>
                </div>
                <img
                  src="/t2.2.png"
                  className="d-block w-100 mx-auto img-fluid"
                  alt="Architectural Floor Plan"
                />
              </div>

              {/* Slide 3 */}
              <div className="carousel-item text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 design-box">
                  <div className="design-number">03</div>
                  <div className="design-description">3D Half Layout</div>
                </div>
                <img
                  src="/t2.3.png"
                  className="d-block w-100 mx-auto img-fluid"
                  alt="3D Half Layout"
                />
              </div>

              {/* Slide 4 */}
              <div className="carousel-item text-center">
                <div className="d-flex justify-content-center align-items-center mb-3 design-box">
                  <div className="design-number">04</div>
                  <div className="design-description">Structural Drawing</div>
                </div>
                <img
                  src="/t2.4.png"
                  className="d-block w-100 mx-auto img-fluid"
                  alt="Structural Drawing"
                />
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#designCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#designCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <Container className="my-3 my-md-5 mb-4 mb-md-5">
          <h2 id="packages" className="text-center mb-3 mb-md-5">
            Our Home Construction Packages
          </h2>

          <Row className="g-3 g-md-4">
            {packagesData.map((pkg, idx) => (
              <Col
                key={idx}
                xs={12} // full width on mobile
                sm={6} // 2 per row on small devices
                md={4} // 3 per row on medium devices
                lg={3} // 4 per row on large devices
                className="d-flex mb-3"
                id={pkg.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <Card className="shadow-sm flex-fill h-100">
                  <Card.Body className="p-0 d-flex flex-column">
                    {/* Header */}
                    <div
                      className="text-center p-2 p-md-3"
                      style={{
                        backgroundColor: "purple",
                        color: "white",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                    >
                      <h1 className="fs-6 fs-md-5">{pkg.title}</h1>
                      <h4 className="mb-0 text-white fs-6 fs-md-5">
                        ₹ {pkg.price} <small>per sqft</small>
                      </h4>
                    </div>

                    {/* Content */}
                    <div
                      className="p-2 p-md-3 flex-grow-1 overflow-auto"
                      style={{ maxHeight: "400px" }}
                    >
                      {Object.keys(pkg.content).map((section, i) => (
                        <div key={i} className="mb-2 border-bottom">
                          <div
                            className="d-flex justify-content-between align-items-center py-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleSection(idx, section)}
                          >
                            <strong>{section}</strong>
                            <span>
                              {openSections[idx]?.[section] ? "−" : "+"}
                            </span>
                          </div>

                          {openSections[idx]?.[section] &&
                            pkg.content[section].length > 0 && (
                              <ul
                                className="ps-3 mb-2"
                                style={{
                                  backgroundColor: "#f0f8f0",
                                  borderLeft: "4px solid #dc3545",
                                  padding: "10px 15px",
                                  marginTop: "5px",
                                  listStyleType: "none",
                                  whiteSpace: "nowrap",
                                  overflowX: "auto",
                                }}
                              >
                                {pkg.content[section].map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            )}
                        </div>
                      ))}

                      <div className="text-center mt-2 mt-md-3">
                          <Button onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }
                            className="w-100 w-md-auto"
                            style={{
                              backgroundColor: "purple",
                              border: "none",
                            }}
                          >
                            GET DETAILED SPECIFICATION
                          </Button>
                        
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-3 mt-md-4">
            
              <Button onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }
                className="w-100 w-md-auto"
                style={{ backgroundColor: "purple", border: "none" }}
              >
                GET FREE ESTIMATE WITH MATERIAL & BRAND SPECIFICATION
              </Button>
           
          </div>
        </Container>

        <Container className="my-4 my-md-5">
          <h2 className="section-title text-center mb-4 mb-md-5">Our Team</h2>

          <div className="mt-3 mt-md-4">
            <h3 className="content-title fs-5 fs-md-4">
              Best Architecture Firms for Luxury Home Designs
            </h3>
            <h5 className="content-subtitle fs-6 fs-md-5 mb-3 mb-md-4">
              Discover Architectural Brilliance with SVF :
            </h5>

            <p className="mb-3 mb-md-4">
              At SVF, we're not just about blueprints; we're about bringing your
              dream spaces to life with a blend of creativity, practicality, and
              unparalleled expertise. Unlike traditional architectural design
              firms trapped in the theoretical, we dive deep into the practical
              side of things. With years of turnkey services under our belt,
              from meticulous designs to flawless construction and chic
              interiors, we know what works.
            </p>

            <p className="mb-3 mb-md-4">
              <strong>Why Choose SVF?</strong> Our secret sauce is our team - a
              vibrant mix of in-house architects, 3D visualizers, civil and
              structural engineers, project managers, and more, all under one
              beautiful roof. We're equipped with a vast material library,
              ensuring your designs are not just visually appealing but are
              built to last.
            </p>

            <p className="mb-3 mb-md-4">
              Experience the SVF Difference. Say goodbye to the confusion of
              designs without construction insight. Our quality checks are
              rigorous, reflecting in every corner of your project. Plus, with
              access to POL (Projects-on-Line), you're never in the dark about
              your design progress. To know more about our works,{" "}
              <a href="#">Click Here</a>.
            </p>

            <p className="mb-3 mb-md-4">
              Choose SVF for a service that's as reliable and comprehensive as
              it is innovative and bespoke. Let's create spaces that speak
              volumes of quality, durability, and beauty.
            </p>
          </div>
        </Container>

        {/* Instagram Section */}
        <section className="py-3 py-md-5 bg-light mb-4 mb-md-5">
          <Container>
            <h2 className="text-center mb-3 mb-md-5">Follow Us on Instagram</h2>
            <Row className="justify-content-center">
              <Col xs={12} sm={10} md={8} lg={6}>
                {/* Profile Card */}
                <div className="d-flex align-items-center justify-content-between p-3 shadow-sm rounded bg-white flex-wrap">
                  {/* Profile Image */}
                  <img
                    src="./instasvflogo.png"
                    alt="Instagram Profile"
                    loading="lazy"
                    className="mb-2 mb-md-0"
                    style={{
                      width: "clamp(70px, 15vw, 90px)",
                      height: "clamp(70px, 15vw, 90px)",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />

                  {/* Profile Info */}
                  <div
                    className="flex-grow-1 text-center text-md-start"
                    style={{ minWidth: "150px" }}
                  >
                    <h6 className="mb-2 text-truncate">svf_homes_ambattur</h6>
                    <p className="mb-2 mb-md-3" style={{ fontSize: "14px" }}>
                      <strong>113</strong> followers
                    </p>
                    <Button
                      href="https://www.instagram.com/svf_homes_ambattur?igsh=emQ1MDE5em9hNnkz"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="mb-2 mb-md-0"
                      style={{
                        background:
                          "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        border: "none",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "12px",
                        padding: "7px 22px",
                        borderRadius: "20px",
                      }}
                    >
                      View Instagram
                    </Button>
                  </div>

                  {/* Instagram Logo */}
                  <img
                    src="./instalogo.png"
                    alt="Instagram"
                    loading="lazy"
                    className="mt-2 mt-md-0"
                    style={{
                      width: "clamp(45px, 8vw, 55px)",
                      height: "clamp(45px, 8vw, 55px)",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "15px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default DesignPackage;
