import React, { useState } from "react";
import axios from "axios";
import styles from "./ContactUs.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    countryCode: "+91", // default country code
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine country code + phone
    const finalData = {
      ...form,
      phone: `${form.countryCode}${form.phone}`,
    };

    try {
      const res = await axios.post("https://svf-backend-4.onrender.com/api/contact", finalData);

      // Show backend response in alert
      alert(res.data.message);

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        countryCode: "+91",
      });
    } catch (err) {
      // Show exact error from backend if available
      alert(
        "Failed to send enquiry: " +
          (err.response?.data || err.message)
      );
      console.error("Error sending enquiry:", err);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div
        className={styles["contact-us"]}
        style={{
          background: "url(/sofa2.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        {/* Contact Form */}
        <div className={styles["contact-form"]}>
          <h2>
            C<span>ontact</span> U<span>s</span>
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <div className={styles["phone-row"]}>
            <select
              className={styles["country-code"]}
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="Enter Your Site Location"
            value={form.location}
            onChange={handleChange}
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button onClick={handleSubmit}>Send Enquiry</button>
        </div>

        {/* Contact Cards */}
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

        <div className={styles.row}>
          <div className={styles.card}>
            <h3>Email</h3>
            <p>
              <a href="mailto:Svfhomes@gmail.com" className={styles.emailButton}>
                Svfhomes@gmail.com
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
