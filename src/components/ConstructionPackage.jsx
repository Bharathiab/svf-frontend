import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ConstructionPackage.css";

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
      Structure: ["Foundation Work", "Column and Beam Construction", "Roofing"],
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
      Painting: ["Wall Preparation", "Primer Application", "Final Paint Coat"],
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
      Flooring: ["Exotic Wood Flooring", "Heated Flooring", "Custom Patterns"],
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

const ConstructionPackagesSection = () => {
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

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Container className="my-3 my-md-5 mb-4 mb-md-5">
      <h2 id="packages" className="text-center mb-3 mb-md-5">Our Home Construction Packages</h2>
      <Row className="g-4">
        {packagesData.map((pkg, idx) => (
          <Col key={idx} xs={12} md={6} lg={3} id={`${packagesData[idx].title.toLowerCase().replace(/\s+/g, '-')}`}>
            <Card className="shadow-sm h-100">
              <Card.Body className="p-0">
                <div
                  className="text-center p-2 p-md-3"
                  style={{
                    backgroundColor: "#198754",
                    color: "white",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                >
                  <h1 style={{ fontSize: "20px" }}>{pkg.title}</h1>
                  <h4 className="mb-0  text-white">
                    ₹ {pkg.price} <small>per sqft</small>
                  </h4>
                </div>
                <div className="p-2 p-md-3">
                  {Object.keys(pkg.content).map((section, i) => (
                    <div key={i} className="mb-2 border-bottom">
                      <div
                        className="d-flex justify-content-between align-items-center py-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleSection(idx, section)}
                      >
                        <strong>{section}</strong>
                        <span>{openSections[idx]?.[section] ? "−" : "+"}</span>
                      </div>
                      {openSections[idx]?.[section] &&
                        pkg.content[section].length > 0 && (
                          <ul
                            className="ps-3"
                            style={{
                              backgroundColor: "#f0f8f0",
                              borderLeft: "4px solid #198754",
                              padding: "10px 15px",
                              marginTop: "5px",
                              listStyleType: "none",
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
                      style={{ backgroundColor: "#198754", border: "none" }}
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
        <Button style={{ backgroundColor: "#198754", border: "none" }} onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }>
          GET FREE ESTIMATE WITH MATERIAL & BRAND SPECIFICATION
        </Button>
      </div>
    </Container>
  );
};

const ConstructionPackage = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar /><br></br><br></br>
      <section className=" py-3 py-md-5 bg-light mt-5 mb-4 mb-md-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Passport-size Image */}
            <Col md={5} className="text-center mb-4 mb-md-0">
              <img
                src="./interior 2008.jpg"
                alt="Company"
                loading="lazy"
                style={{
                  width: "clamp(200px, 50vw, 250px)",
                  height: "clamp(200px, 50vw, 250px)",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <div className="mt-4">
                <Button
                  variant="outline-success"
                  className="d-flex align-items-center justify-content-center mb-2 mb-md-3 w-100"
                >
                  <FaFilePdf className="me-2 text-danger" />
                  Company Registration Certificate
                </Button>
                <Button
                  variant="outline-success"
                  className="d-flex align-items-center justify-content-center w-100"
                >
                  <FaFilePdf className="me-2 text-danger" />
                  Company Pancard
                </Button>
              </div>
            </Col>

            {/* Right Side - Content */}
            <Col md={7}>
              <h2 className="fw-bold mb-3">
                Best Residential Architects in Chennai
              </h2>
              <p>
                At <strong>Sri Vinayaga Foundation</strong>, we transform your
                dream home into reality with precision, trust, and innovation.
                Recognized as one of the{" "}
                <strong>Best Architecture Firms in Chennai</strong>, we
                specialize in <strong>Architecture, Construction</strong>, and{" "}
                <strong>Interior Design</strong>, offering complete turnkey
                solutions. From planning to execution, we deliver homes designed
                with elegance, functionality, and quality construction.
              </p>
              <p>
                Whether you are looking for a{" "}
                <strong>modern compact home</strong> or a{" "}
                <strong>luxury villa</strong>, Sri Vinayaga Foundation provides
                end-to-end services under one roof. Our vastu-compliant designs
                blend creativity with engineering excellence to create homes
                that are beautiful, durable, and unique to your lifestyle.
              </p>
              <p>
                Choose <strong>Sri Vinayaga Foundation</strong> as your trusted{" "}
                <strong>building contractor in Chennai</strong> and experience a
                smooth, reliable, and high-quality construction journey.
              </p>
            </Col>
          </Row>
        </Container>
      </section><br></br>

      <ConstructionPackagesSection /><hr></hr>

      
      {/* Our 3D Designs Section */}  
<section className="py-3 py-md-5 mb-4 mb-md-5">
  <Container>
    <h2 className="text-center mb-3 mb-md-5">OUR 3D DESIGNS</h2>
    <Row className="g-4">
      <Col xs={12} md={4}>
        <img
          src="./1.1.png"
          alt="3D Design 1"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./c2.png"
          alt="3D Design 2"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./2.jpeg"
          alt="3D Design 3"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./8.png"
          alt="3D Design 4"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./5.jpeg"
          alt="3D Design 5"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./3.jpeg"
          alt="3D Design 6"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
    </Row>
  </Container></section>

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
            style={{
              width: "clamp(70px, 15vw, 90px)",
              height: "clamp(70px, 15vw, 90px)",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "15px",
            }}
          />

          {/* Profile Info */}
          <div className="flex-grow-1" style={{ minWidth: "150px" }}>
            <h6 className="mb-2 text-truncate">svf_homes_ambattur</h6>
            <p className="mb-2" style={{ fontSize: "14px" }}>
              <strong>113</strong> followers
            </p>
            <Button
              href="https://www.instagram.com/svf_homes_ambattur?igsh=emQ1MDE5em9hNnkz"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
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

          {/* Instagram Logo (medium + round) */}
          <img
            src="./instalogo.png"
            alt="Instagram"
            loading="lazy"
            style={{
              width: "clamp(45px, 8vw, 55px)",
              height: "clamp(45px, 8vw, 55px)",
              borderRadius: "50%",   // 🔹 makes it round
              objectFit: "cover",    // 🔹 fills the circle
              marginLeft: "15px",
            }}
          />
        </div>
        
      </Col>
    </Row>
  </Container>
</section>


{/* Office Section */}
<section className="py-3 py-md-5 mb-4 mb-md-5">
  <Container>
    <h2 className="text-center mb-3 mb-md-5">OUR OFFICE AT AMBATTUR, CHENNAI</h2>
    <Row className="g-4">
      <Col xs={12} md={4}>
        <img
          src="./office1.png"
          alt="Office 1"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./office2.png"
          alt="Office 2"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./office3.png"
          alt="Office 3"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./office4.png"
          alt="Office 4"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./office5.png"
          alt="Office 5"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
      <Col xs={12} md={4}>
        <img
          src="./office6.png"
          alt="Office 6"
          loading="lazy"
          className="img-fluid rounded shadow-sm"
        />
      </Col>
    </Row>
  </Container>
</section><hr></hr>

{/* Construction Process Timeline Section */}
<section className="py-3 py-md-5 mb-4 mb-md-5">
  <Container>
    <h2 className="text-center mb-3 mb-md-5">Our Construction Process</h2>
    <div style={{ position: "relative", padding: isSmall ? "0 20px" : "0" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: isSmall ? "20px" : "50%",
          width: "3px",
          backgroundColor: "#ccc",
          transform: isSmall ? "none" : "translateX(-50%)",
          zIndex: 1,
          display: isSmall ? "none" : "block",
        }}
      />

      {/* Timeline Steps */}
      {[
        { number: "1", title: "Agreement Signing", img: "./t1.1.png" },
        { number: "2", title: "Soil Test", img: "./t1.2.png" },
        { number: "3", title: "Electrical & Plumbing", img: "./t1.3.png" },
        { number: "4", title: "Doors & Windows", img: "./t1.4.png" },
        { number: "5", title: "Key Handover", img: "./t1.5.png" },

      ].map((step, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            style={{
              position: "relative",
              marginBottom: "50px",
              display: "flex",
              flexDirection: isSmall ? "row" : (isLeft ? "row" : "row-reverse"),
              alignItems: "flex-start",
              justifyContent: "flex-start",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isSmall ? "flex-start" : (isLeft ? "flex-end" : "flex-start"),
                maxWidth: isSmall ? "100%" : "clamp(200px, 40vw, 250px)",
                marginRight: isSmall ? "0px" : (isLeft ? "0px" : "clamp(50px, 20vw, 400px)"),
                marginLeft: isSmall ? "40px" : (isLeft ? "clamp(50px, 20vw, 300px)" : "0px"),
              }}
            >
              {/* Card */}
              <div
                style={{
                  backgroundColor: "#198754",
                  color: "#ffffffff",
                  fontWeight: "700",
                  padding: "10px 15px",
                  borderRadius: isSmall ? "10px" : (isLeft ? "0 10px 10px 0" : "10px 0 0 10px"),
                  position: "relative",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                  marginBottom: "10px",
                  width: "100%",
                  clipPath: isSmall ? "none" : (isLeft
                    ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)"
                    : "polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)"),
                }}
              >
                {/* Triangle arrow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: isSmall ? "-10px" : (isLeft ? "100%" : "-10px"),
                    transform: "translateY(-50%)",
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: isSmall ? "10px solid #198754" : (isLeft ? "10px solid #198754" : "none"),
                    borderRight: isSmall ? "none" : (isLeft ? "none" : "10px solid #198754"),
                    zIndex: 3,
                    display: isSmall ? "block" : "block",
                  }}
                />
                <span
                  style={{
                    backgroundColor: "white",
                    color: "#198754",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    fontWeight: "900",
                    fontSize: "1.1rem",
                    display: "inline-block",
                    minWidth: "40px",
                    textAlign: "center",
                    marginRight: "10px",
                    float: "left",
                  }}
                >
                  {step.number}
                </span>
                <span style={{ lineHeight: "1.4", display: "inline-block" }}>
                  {step.title}
                </span>
              </div>

              {/* Image */}
              <div
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  width: isSmall ? "100%" : "350px",
                  flexShrink: 0,
                  position: "relative",
                  height: "200px",
                }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Timeline Dots */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: isSmall ? "20px" : "50%",
            top: `calc(${i * (100 / 4)}% - 10px)`,
            width: "20px",
            height: "20px",
            backgroundColor: "#198754",
            borderRadius: "50%",
            border: "3px solid white",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            transform: isSmall ? "none" : "translateX(-50%)",
            zIndex: 3,
            display: isSmall ? "none" : "block",
          }}
        />
      ))}
    </div>
  </Container>
</section>

{/* Our Design Timeline Section */}
<section className="py-3 py-md-5">
  <Container>
    <h2 className="text-center mb-3 mb-md-5">Our Design Process</h2>
    <div style={{ position: "relative", padding: isSmall ? "0 20px" : "0" }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: isSmall ? "20px" : "50%",
          width: "3px",
          backgroundColor: "#ccc",
          transform: isSmall ? "none" : "translateX(-50%)",
          zIndex: 1,
          display: isSmall ? "none" : "block",
        }}
      />

      {/* Timeline Steps */}
      {[
        { number: "1", title: "Site Plan", img: "./t2.1.png" },
        { number: "2", title: "Architectural Plan", img: "./t2.2.png" },
        { number: "3", title: "3D Half Layout", img: "./t2.3.png" },
        { number: "4", title: "Structural Drawing", img: "./t2.4.png" },
        { number: "5", title: "Elevation 3d Design", img: "./t2.5.png" },
        { number: "6", title: "Approval Drawing", img: "./t2.6.png" },
        { number: "7", title: "3D Interior Design", img: "./t2.7.png" },

      ].map((step, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            style={{
              position: "relative",
              marginBottom: "50px",
              display: "flex",
              flexDirection: isSmall ? "row" : (isLeft ? "row" : "row-reverse"),
              alignItems: "flex-start",
              justifyContent: "flex-start",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isSmall ? "flex-start" : (isLeft ? "flex-end" : "flex-start"),
                maxWidth: isSmall ? "100%" : "clamp(200px, 40vw, 250px)",
                marginRight: isSmall ? "0px" : (isLeft ? "0px" : "clamp(50px, 20vw, 400px)"),
                marginLeft: isSmall ? "40px" : (isLeft ? "clamp(50px, 20vw, 300px)" : "0px"),
              }}
            >
              {/* Card */}
              <div
                style={{
                  backgroundColor: "#198754",
                  color: "#ffffffff",
                  fontWeight: "700",
                  padding: "10px 15px",
                  borderRadius: isSmall ? "10px" : (isLeft ? "0 10px 10px 0" : "10px 0 0 10px"),
                  position: "relative",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                  marginBottom: "10px",
                  width: "100%",
                  clipPath: isSmall ? "none" : (isLeft
                    ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)"
                    : "polygon(10px 0, 100% 0, 100% 100%, 10px 100%, 0 50%)"),
                }}
              >
                {/* Triangle arrow */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: isSmall ? "-10px" : (isLeft ? "100%" : "-10px"),
                    transform: "translateY(-50%)",
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: isSmall ? "10px solid #198754" : (isLeft ? "10px solid #198754" : "none"),
                    borderRight: isSmall ? "none" : (isLeft ? "none" : "10px solid #198754"),
                    zIndex: 3,
                    display: isSmall ? "block" : "block",
                  }}
                />
                <span
                  style={{
                    backgroundColor: "white",
                    color: "#198754",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    fontWeight: "900",
                    fontSize: "1.1rem",
                    display: "inline-block",
                    minWidth: "40px",
                    textAlign: "center",
                    marginRight: "10px",
                    float: "left",
                  }}
                >
                  {step.number}
                </span>
                <span style={{ lineHeight: "1.4", display: "inline-block" }}>
                  {step.title}
                </span>
              </div>

              {/* Image */}
              <div
                style={{
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  width: isSmall ? "100%" : "350px",
                  flexShrink: 0,
                  position: "relative",
                  height: "200px",
                }}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Timeline Dots */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: isSmall ? "20px" : "50%",
            top: `calc(${i * (100 / 6)}% - 10px)`,
            width: "20px",
            height: "20px",
            backgroundColor: "#198754",
            borderRadius: "50%",
            border: "3px solid white",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            transform: isSmall ? "none" : "translateX(-50%)",
            zIndex: 3,
            display: isSmall ? "none" : "block",
          }}
        />
      ))}
    </div>
  </Container>
</section>

{/* Sri Vinayaga Foundation Architects Section */}
<section className="py-3 py-md-5 bg-light mb-4 mb-md-5 architects-section">
  <Container>
    <h2 className="text-center mb-3 mb-md-5 section-title">Best Architects in Chennai</h2>
    <div className="green-bar"></div>
    <p>Discover the finest architects in Chennai, renowned for their expertise in crafting homes that blend tradition with modernity. These professionals excel in designing spaces that are both functional and aesthetically pleasing, tailored to your unique lifestyle.</p>
    <p>When looking for architects in Chennai, choosing a firm with experience working locally is essential. It is because Chennai has its unique climate and cultural context, which can influence the design and construction of a building. A local architect will be better equipped to understand these factors and design a space suited to your needs.</p>
    <p>Additionally, choosing an architect skilled in the type of project you have in mind is essential. Whether you're looking to build a residential or commercial space, an experienced architect can provide the guidance and support you need to succeed in your project.</p>
    <p>Some of the individual house builders in Chennai offer various services, including design and planning, construction supervision, project management, and more. Working with a skilled and experienced architect ensures your project is completed on time and within budget while meeting your unique needs and style preferences.</p>
    <p>If you're looking for the best architects, research and choose an experienced, skilled, and dedicated firm providing you with the best possible service. You can create a beautiful, functional space you'll love for years with the right architect.</p>

    <h2 className="text-center mb-3 mb-md-5 section-title">Why Choose Sri Vinayaga Foundation?</h2>
    <div className="green-bar"></div>
    <p>Starting a construction project requires a reliable partner. Sri Vinayaga Foundation brings 17 years of industry experience, delivering quality workmanship on time and within budget. Their expertise spans premium houses to luxury villas, ensuring tailored solutions for every client.</p>
    <h3 className="section-subheading">Experience:</h3>
    <p>Sri Vinayaga Foundation brings a wealth of experience to your construction. Having been in the industry for 17 years, our team of experts offer a dedicated service to our customers by understanding the industry trends and unparalleled knowledge to deliver exceptional workmanship to your construction within the specified timeline and budget.</p>
    <h3 className="section-subheading">Expertise:</h3>
    <p>We understand that construction needs vary, whether independent premium houses or luxury villas. Sri Vinayaga Foundation excels in tailoring our expertise to match your specific project requirements. We're well-equipped to efficiently and effectively handle diverse projects, ensuring outstanding results every time.</p>
    <h3 className="section-subheading">Credentials:</h3>
    <p>Your peace of mind is our priority. Sri Vinayaga Foundation is a licensed and insured building contractor, ensuring we meet all legal standards. Our commitment to safety and protection means you're covered in the rare event of accidents or damages during construction.</p>
    <h3 className="section-subheading">Quality of work:</h3>
    <p>Sri Vinayaga Foundation has built a sterling reputation for delivering nothing less than top-tier work. Our extensive portfolio showcases a history of successful projects. Take a look at our satisfied customers' reviews and ask for references to see our consistent track record of completing projects to the highest standards.</p>
    <h3 className="section-subheading">Communication:</h3>
    <p>We recognize the importance of effective communication throughout the construction process. Sri Vinayaga Foundation prides itself on being highly responsive to your needs and concerns. Precise and efficient communication is our hallmark, ensuring you're always in the loop and your vision is brought to life seamlessly.</p>
    <h3 className="section-subheading">One-Stop Destination:</h3>
    <p>Sri Vinayaga Foundation takes pride in being one of the best architecture firms in Chennai that offers comprehensive solutions for your architectural needs. Whether you envision a unique residential property or cutting-edge commercial space, we offer you the industry's best expertise and creativity to make your dreams a reality. From concept conception to completion, our designers and architects work closely to ensure your vision is reflected in our creation.</p>
    <h3 className="section-subheading">High Transparency:</h3>
    <p>Being transparent is not a word that too in the architecture industry. Transparency is not a simple word for us but rather the core principle of our company. That is why we foster honest and open communication with our clients, building a robust partnership with our clients, stakeholders, and clients.</p>
    <p>We maintain a transparent relationship with our clients by providing regular updates to our clients on the project progression, such as budgets, plan changes due to building challenges, and timelines. Sri Vinayaga Foundation ensures a collaborative approach with clients throughout the design and construction phase to take up the ideas and input from the client. In addition, we also document every stage of the construction process to ensure there is a clear understanding on the decision taken and process.</p>
    <h3 className="section-subheading">On-Time Delivery:</h3>
    <p>We are committed to the timely delivery of the project by ensuring that we meet the deadlines and milestones. This approach makes us the best architects in Chennai for all your architectural requirements.</p>
    <p>Finding the right individual house builders in Chennai is critical to the success of your project. By considering the factors mentioned above, you can ensure that you find a contractor that has the experience, expertise, credentials, and reputation to complete your project to a high standard.</p>

    <h2 className="text-center mb-3 mb-md-5 section-title">Building Contractors in Chennai</h2>
    <div className="green-bar"></div>
    <p>Choosing the right building contractor in Chennai is vital. Consider experience, specialization, licensing, and communication skills to ensure your project is completed to the highest standards.</p>
    <h3 className="section-subheading">Experience:</h3>
    <p>Look for building contractors that have years of experience in the construction industry. An experienced contractor will have the knowledge and expertise necessary to complete your project with quality workmanship and within budget and timeline.</p>
    <h3 className="section-subheading">Expertise:</h3>
    <p>Building contractors may specialize in different areas of construction, such as residential, commercial or industrial projects. Consider your specific needs and choose a contractor that has the expertise to handle your project efficiently and effectively.</p>
    <h3 className="section-subheading">Credentials:</h3>
    <p>It is essential to choose a building contractor that is licensed and insured. This will ensure that they meet the necessary legal requirements and that you are protected in case of any accidents or damages during the construction process.</p>
    <h3 className="section-subheading">Quality of work:</h3>
    <p>Look for building contractors that have a reputation for delivering quality work. Check their portfolio of previous projects, read customer reviews, and ask for references to ensure that they have a track record of completing projects to a high standard.</p>
    <h3 className="section-subheading">Communication:</h3>
    <p>Effective communication is crucial during the construction process. Look for building contractors that are responsive to your needs and can communicate clearly and effectively throughout the project.</p>
    <p>Finding the right building contractor in Chennai is critical to the success of your project. By considering the factors mentioned above, you can ensure that you find a contractor that has the experience, expertise, credentials, and reputation to complete your project to a high standard.</p>

    <h2 className="text-center mb-3 mb-md-5 section-title">Residential Architects in Chennai You Can Trust</h2>
    <div className="green-bar"></div>
    <p>Sri Vinayaga Foundation is a tech-savvy architecture firm offering comprehensive services from design to construction. Their expert team ensures your home is meticulously planned and executed with care.</p>
    <p>We specialize in:</p>
    <ul className="list-unstyled">
      <li>Vastu-compliant planning</li>
      <li>Modern elevation design</li>
      <li>Duplex, Villa, and Contemporary Home Layouts</li>
      <li>CMDA/DTCP plan approval support</li>
      <li>Structural safety & functional layouts</li>
    </ul>
    <p>With Sri Vinayaga Foundation, you get complete control – right from the plan to the final handover.</p>
    <h3 className="section-subheading">Design + Construction – One Company, Complete Solution</h3>
    <p>Sri Vinayaga Foundation is among the few architecture firms in Chennai that also handle construction. You don’t need to run between an architect and a contractor. We take care of it all, seamlessly.</p>
    <p>Our Services Include:</p>
    <ul className="list-unstyled">
      <li>Plot analysis and orientation planning</li>
      <li>Custom floor plans</li>
      <li>3D elevation & walkthroughs</li>
      <li>Structural, electrical & plumbing drawings</li>
      <li>CMDA/DTCP plan approval</li>
      <li>Full construction execution</li>
      <li>Interior & landscape services</li>
      <li>Final handover with NOC</li>
    </ul>
    <p>All project updates are shared daily via our POL app.</p>
    <h3 className="section-subheading">Why Sri Vinayaga Foundation is Preferred by Homeowners in Chennai</h3>
    <ul className="list-unstyled">
      <li>Over 2,000+ custom home designs</li>
      <li>In-house architects, engineers & site team</li>
      <li>Fixed-cost, transparent construction packages</li>
      <li>End-to-end service: Design + Build</li>
      <li>POL App for real-time updates</li>
      <li>Vastu-based space planning</li>
      <li>No delays, no cost escalations</li>
    </ul>
    <p>Whether you're looking for residential architects in Chennai or a full home construction partner, Sri Vinayaga Foundation is the name homeowners trust.</p>
    <h3 className="section-subheading">Areas We Serve for Home Design & Construction in Chennai</h3>
    <p>Sri Vinayaga Foundation has successfully completed numerous projects across various localities. We actively work in the following prominent neighborhoods:</p>
    <ul className="list-unstyled">
      <li>Guindy Vadapalani Kotturpuram Kodambakkam Porur Chrompet Mogappair Nandanam Teynampet Arumbakkam Ashok Nagar</li>
    </ul>
    <p>If you own land in any of these areas, reach out to us for a free consultation.</p>
    <h3 className="section-subheading">Start Designing Your Dream Home with Sri Vinayaga Foundation</h3>
    <p>Whether you are just planning or ready to build, Sri Vinayaga Foundation is your ideal partner for home architecture and construction in Chennai.</p>
    <p>📍 Free Site Visit & Consultation</p>
    <p>📐 Custom Plan & 3D Elevation</p>
    <p>📱 Daily Construction Updates via POL App</p>
    <p>📝 Transparent Pricing. No Hidden Costs</p>

    <h2 className="text-center mb-3 mb-md-5 section-title">FAQs – Residential Architects & Builders in Chennai</h2>
    <div className="green-bar"></div>
    <p>Here are answers to common questions from our valued clients.</p>
    <h3 className="section-subheading">What is the house construction cost in Chennai in 2025?</h3>
    <p>Curious about the cost of constructing a residential house in Chennai in 2025? It all boils down to the quality you're aiming for. For a standard, decent quality house, construction costs kick off at ₹1950 per square foot. If you want to up the ante with good quality, prices begin at ₹2300 per square foot. And for the ultimate in luxury, you're looking at costs up to ₹4200 per square foot. Check out Our Home Construction Packages for more details on what's included.</p>
    <h3 className="section-subheading">Can you Provide Designs alone?</h3>
    <p>Absolutely! Sri Vinayaga Foundation can totally hook you up with just the Architectural Design Services if that's what you're looking for, separate from our all-in-one Turn-Key Construction Services. We've got some cool 'Architectural Design Packages' specially crafted for our customers. Wanna check them out? Just click here for all the juicy details.</p>
    <h3 className="section-subheading">What are the set of drawings and plans required for the professional construction of a premium luxury home?</h3>
    <p>Your luxury home project will necessitate a complete set of Architectural, Structural, and Fine Detailing Drawings, all crafted by a team of Professional Architects, 3D Visualizers, Structural Engineers, Civil Engineers, and Interior Designers.</p>
    <ul className="list-unstyled">
      <li>SCHEME DRAWING : ALL FLOORS (2D)</li>
      <li>ELEVATION DESIGN : (3D)</li>
      <li>HALF LAYOUT : ALL FLOORS (3D)</li>
      <li>ELECTRICAL DRAWINGS : ALL FLOORS (2D)</li>
      <li>PLUMBING DRAWING : ALL FLOORS (2D)</li>
      <li>WORKING DRAWING : ALL FLOORS (2D)</li>
      <li>SOIL TEST REPORT</li>
      <li>STRUCTURAL DRAWINGS</li>
      <li>FURNITURE LAYOUT : ALL FLOORS (2D)</li>
      <li>ELEVATION DETAIL DRAWING : (2D)</li>
      <li>SITE ASSESSMENT & SITE PLAN</li>
      <li>INTERIOR VIEWS : ALL FLOORS (3D)</li>
      <li>INTERIOR DETAILING : ALL ROOMS (2D)</li>
      <li>INTERIOR 3D WALK-THROUGH</li>
      <li>APPROVAL DRAWING</li>
      <li>LANDSCAPING ARCHITECTURAL DESIGNS</li>
    </ul>
    <h3 className="section-subheading">Can Sri Vinayaga Foundation assist with obtaining the necessary plan sanctions or approvals for our project?</h3>
    <p>YES, we provide assistance by appointing a Liaison Agent / Approval Consultant who will manage the plan sanction process for you, ensuring a smooth experience. Plan Approval fees will be paid by you directly to the Agent. This value-added service is exclusively available to clients who engage with our Construction Services.</p>
    <h3 className="section-subheading">What is the Process of Getting Building Plan Sanction in Chennai?</h3>
    <p>Your Comprehensive Guide to Obtaining Building Plan Approval in Chennai</p>
    <p>At Sri Vinayaga Foundation, we understand the importance of getting it right, and we're dedicated to making the process as smooth as possible for you. So, let's dive in and explore everything you need to know about obtaining the necessary permissions and approvals in Chennai.</p>
    <h4>Authority for Approval: Understanding CMDA Regulations In Chennai</h4>
    <p>In Chennai, the Chennai Metropolitan Development Authority (CMDA) is the regulatory body responsible for granting planning permissions under the Tamil Nadu Town and Country Planning Act 1971. These permissions are valid for three years from the date of issue.</p>
    <p>The CMDA delegates powers to local bodies within the Chennai Metropolitan Area (CMA) for approving planning permissions for various categories of construction. For major developments like high-rise buildings, CMDA directly issues planning permissions.</p>
    <h4>Applying for Planning and Building Permits: A Step-by-Step Process</h4>
    <p>The application process for planning and building permits in Chennai follows a structured approach. Here's a simplified breakdown:</p>
    <p>Registration and Form Submission: Applicants must register on the citizen portal of the local body and submit the required forms online. These forms include applications for planning permissions and undertakings from the applicant/owner.</p>
    <p>Selection of Registered Professionals: Applicants choose registered architects or engineers who will prepare the necessary drawings and submit the applications for approval.</p>
    <p>Document Verification and Auto-Scrutiny: The registered professional visits the site, collects documents, and prepares drawings. These are then submitted online for auto-scrutiny to ensure compliance with building regulations.</p>
    <p>Site Inspection: An Assistant Executive Engineer (AEE) conducts a site visit within seven days of application submission. The inspection verifies various aspects such as site boundaries, access roads, and zoning.</p>
    <p>Document Verification by AEE: The AEE verifies the submitted documents. If additional details are required, the applicant must provide them within 15 days.</p>
    <p>Approval Process: Once all documents are in order, the application is submitted to the Executive Engineer (EE) for approval. If approved, a demand advice is generated, and the applicant is notified to make the necessary payment.</p>
    <p>Fee Payment and Final Approval: Upon payment verification, the EE approves the fees, and the final building permit is generated. The applicant receives approval via SMS and email and can download the certificate online.</p>
    <p>For non-high-rise buildings, the following documents are typically required:</p>
    <ul className="list-unstyled">
      <li>Application forms</li>
      <li>Undertakings from the applicant/owner</li>
      <li>Copy of property documents</li>
      <li>Affidavits of undertaking</li>
      <li>Revenue records</li>
      <li>Encumbrance certificate</li>
      <li>NOCs from relevant authorities</li>
    </ul>
    <p>Additionally, specific documentation may be required for buildings in regulated areas, coastal regulation zones, and hill conservation areas.</p>
    <h4>Conclusion: Your Journey to Construction Success Starts Here</h4>
    <p>Navigating the building plan approval process in Chennai may seem complex, but with Sri Vinayaga Foundation by your side, it becomes a manageable journey. From document preparation to application submission and approval, we're here to support you every step of the way. Trust Sri Vinayaga Foundation to simplify the process and ensure a seamless experience as you embark on your construction project.</p>
    <h3 className="section-subheading">Does Sri Vinayaga Foundation handle both home design and construction?</h3>
    <p>Yes. Sri Vinayaga Foundation is a full-service home design + construction company. You get a dedicated team for architectural planning and site execution.</p>
    <h3 className="section-subheading">What makes Sri Vinayaga Foundation different from other architecture firms in Chennai?</h3>
    <p>We don’t just design – we build. From concept to completion, you deal with one company, ensuring better coordination and accountability.</p>
    <h3 className="section-subheading">What is the cost of designing a home plan in Chennai?</h3>
    <p>Our design-only packages start from ₹25,000. We also offer free planning when you opt for construction with us.</p>
    <h3 className="section-subheading">Do you help with government approvals like CMDA/DTCP?</h3>
    <p>Yes, we assist with all documentation and plan approvals required for your locality.</p>
    <h3 className="section-subheading">Can I visit completed homes before proceeding?</h3>
    <p>Absolutely. We can arrange site visits to completed or ongoing projects near your location.</p>
  </Container>
</section>

    <Footer/></div>
    
  );
};

export default ConstructionPackage;
