import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Interior.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Interior() {
  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      <div className="hero-section" style={{background: 'url(/sofa1.jpg) no-repeat center center fixed', backgroundSize: 'cover'}}>
        {/* Headline */}
        <div className="headline text-danger ">
          <span>HOME INTERIOR EXPERTS !!!</span>
          <br />
        </div><br></br><br></br>

        {/* Form */}
        <div className="form-box mt-5">
          <h4>Signature Luxury Interiors</h4>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Fullname" required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Mobile Number" required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email ID" required
              />
            </div>
            <button type="submit" className="btn btn-quote w-100 bg-danger" onClick={() => window.location.href = "tel:+918122876119"}>
              GET FREE QUOTE
            </button>
          </form>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2>End-to-end Home Interior Solutions</h2>
          <div className="row g-4 mt-4">
            {[
              {
                src: "https://img.icons8.com/ios/100/kitchen-room.png",
                text: "Modular Kitchen",
              },
              {
                src: "https://img.icons8.com/ios/100/wardrobe.png",
                text: "Storage & Wardrobes",
              },
              {
                src: "https://img.icons8.com/ios/100/chandelier.png",
                text: "False Ceiling & Lights",
              },
              {
                src: "https://img.icons8.com/ios/100/tv.png",
                text: "TV Units",
              },
              { src: "/crockey.jpg", text: "Crockery Units" },
              { src: "/study table.jpg", text: "Study Tables" },
              { src: "/walpaper.jpg", text: "Wallpaper" },
              {
                src: "https://img.icons8.com/ios/100/closet.png",
                text: "Pooja Unit",
              },
            ].map((item, i) => (
              <div className="col-md-3 col-sm-4 col-6" key={i}>
                <div className="solution-card">
                  <img src={item.src} alt={item.text} />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-consult bg-danger" onClick={() => window.location.href = "tel:+918122876119"}>BOOK FREE CONSULTATION</button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2>
            Our Experience Centre <span>@ AMBATTUR, CHENNAI</span>
          </h2>
          <div className="row g-4 mt-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div className="col-md-6 col-lg-4" key={num}>
                <img
                  src={`/img${num}.jpg`} // ✅ Correct
                  alt={`Experience ${num}`}
                  className="img-fluid experience-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="faq-container">
        <h2 className="faq-title">Have Questions?</h2>
        <p className="faq-subtitle">
          Here are some of the most frequently asked questions from our
          customers.
        </p>

        <div className="faq-item">
          <h3>1. What are the types of Home Interior Packages you provide?</h3>
          <p>
            Package..? Seriously..? Then you must have seen those tempting fancy
            ads by others: ‘Get your dream home with our Super Saver Package –
            only 6.5 lacs!’ where they promise you a modular kitchen, three
            wardrobes, beds, a shoe rack... and if you’re really lucky, maybe
            they’ll throw in a magic lamp with a genie to grant your interior
            wishes. But let’s face it – in the real world, one-size-fits-all
            packages are more myth than magic.
          </p>
          <p>
            At SVF HOMES Interiors, we’re firm believers that your home isn’t a
            ‘one-size-fits-all’ scenario. We don’t just provide cupboards and
            countertops; we curate environments where every element, from the
            color on the walls to the texture of the fabrics, aligns with your
            vision and the unique character of your space. In a world where
            personalization is key,
            <strong>
              {" "}
              settling for a standard package is like wearing someone else’s
              shoes
            </strong>{" "}
            – uncomfortable and frankly, a little awkward. At Sri Vinayaga Foundation,
            we tailor every design to fit you perfectly, ensuring that your home
            is as unique as you are.
          </p>
        </div>

        <div className="faq-item">
          <h3>2. What are the types of Home Interior Services you provide?</h3>
          <p>
            We provide End-to-End Luxury Home Interior Services, including
            Modular Kitchens, false ceilings, lighting solutions,
            custom-designed walk-in wardrobes, furnishing & decor, Furniture,
            wall paneling & painting, Bedroom Interiors, Living Room Interiors,
            Home Automation, Upholsteries, Indoor gardening, etc. We ensure a
            seamless experience through proper Space planning, Concept
            Development, Design Development and 3D Visualization.
          </p>
        </div>

        <div className="faq-item">
          <h3>
            3. Are there any size limitations for residential interior projects
            you undertake?
          </h3>
          <p>
            At Sri Vinayaga Foundation, we specialize in crafting high-end, luxurious
            living spaces. We typically engage in projects with a minimum
            threshold of 10 Lacs and cater to spaces that are at least a 3 BHK
            house. Our expertise is best utilized in projects that meet a
            certain scale and scope ensuring each project meets our high
            standards of luxury and elegance.
          </p>
        </div>
      </div>

      {/* Connect With Us */}
      <section className="connect-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Connect With Us</h2>
          <p className="text-muted">
            Reach out to us via WhatsApp or Phone for an Exceptional Home Design
            Experience.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
            <a href="tel:+918122876119" className="btn b btn-lg">
              <i className="bi bi-telephone-fill"></i> CALL NOW
            </a>
            <a
              href="https://wa.me/8122876119"
              target="_blank"
              rel="noreferrer"
              className="btn b btn-lg"
            >
              <i className="bi bi-whatsapp"></i> WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-5">
        <div className="container d-flex justify-content-center">
          <div className="enquiry-box p-4 rounded">
            <h3 className="fw-bold text-center mb-4">Enquire Now</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name *"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="mb-3 d-flex">
                <span className="input-group-text bg-white">🇮🇳</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number *"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Site Location *"
                  required
                />
              </div>
              <a href=""onClick={() => window.location.href = "tel:+918122876119"}>
              <button type="submit" className="btn w-100 fw-bold ">
                GET FREE QUOTE
              </button></a>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner text-center text-dark py-5">
        <div className="container">
          <h2>
            <span className="h2 fw-bold">Your Dream Home Interior </span>
            <span className="h2 fw-bold">is Just a Click Away</span>
          </h2>
          <p className="mt-2">
            Book a free consultation with our expert interior designers.
          </p>
          <a href="#contact" className="btn b btn-lg mt-3"onClick={() => window.location.href = "tel:+918122876119"}>
            BOOK FREE CONSULTATION
          </a>
        </div>
      </section>

      {/* Contact Map */}
      <section className="contact-map">
        <div className="container-fluid">
          <div className="row g-0">
            {/* Contact Info */}
            <div className="col-lg-6 contact-left p-5 text-dark">
              <h3 className="fw-bold">Contact Us</h3><span>You can find us here:</span><br></br><br></br>

              <p>
                <strong>Phone :</strong>{" "}
                <a href="tel:+919003318418" className="text-danger">
                  +91 8122876119
                </a>
              </p>
              <p>
                <strong>Mail :</strong>{" "}
                <a
                  href="mailto:svinayagafoundation@gmail.com"
                  className="text-danger"
                >
                  svinayagafoundation@gmail.com
                </a>
              </p>

              <p>
                <span className="text-danger fw-bold">Address : </span> No.3 , Munusami Koil Street ,
                Menambedu Ambattur , Chennai - 600053
              </p>

              {/* Social Icons */}
              <div className="social-icons mt-4">
                <a href="#">
                  <i className="bi bi-facebook fs-4 me-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter fs-4 me-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube fs-4 me-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-pinterest fs-4 me-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram fs-4 me-3"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-6">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.85001451402297!2d80.16837732668182!3d13.124492890798775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e17c4094c3%3A0x8757fc860c5b644f!2sSVF%20Apartment!5e0!3m2!1sen!2sin!4v1757835087007!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
