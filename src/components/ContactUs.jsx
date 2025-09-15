import React from "react";
import styles from "./ContactUs.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className={styles["contact-us"]} style={{background: 'url(/sofa2.png) no-repeat center center', backgroundSize: 'cover'}}>
        {/* Floating Icons */}
        <div className={styles["floating-icon"]}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="Home"
          />
        </div>
        <div className={styles["floating-icon2"]}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Map"
          />
        </div>
        <div className={styles["floating-icon3"]}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/15/15874.png"
            alt="Phone"
          />
        </div>

        {/* Contact Form */}
        <div className={styles["contact-form"]}>
          <h2>
            C<span>ontact</span> U<span>s</span>
          </h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <div className={styles["phone-row"]}>
            <select className={styles["country-code"]}>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <input type="text" placeholder="Enter Your Site Location" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button onClick={() =>
                        (window.location.href = "tel:+918122876119")
                      }>Send Enquiry</button>
        </div>

        {/* First Row Cards */}
        <div className={styles.row}>
          <div className={styles.card}>
            <h3>Our Location</h3>
            <a
              href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.85001451402297!2d80.16837732668182!3d13.124492890798775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e17c4094c3%3A0x8757fc860c5b644f!2sSVF%20Apartment!5e0!3m2!1sen!2sin!4v1757835087007!5m2!1sen!2sin"
              target="_blank"
              rel="noreferrer"
              className={styles["map-btn"]}
            >
              View Map
            </a>
          </div>
          <div className={styles.card}>
            <h3>Call Now</h3>
            <p>
              <a href="tel:9444892265" className={styles["call-link"]}>
                9444892265
              </a>
            </p>
          </div>
        </div>

        {/* Second Row Cards */}
        <div className={styles.row}>
          <div className={styles.card}>
            <h3>Email</h3>

            <p>
              <a
                href="mailto:svinayagafoundation@gmail.com"
                className={styles.emailButton}
              >
                svinayagafoundation@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.card}>
            <h3>Instagram</h3>
            <a
              href="https://www.instagram.com/svf_homes_ambattur/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className={styles["insta-logo"]}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
