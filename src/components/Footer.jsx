import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: " #198754", // green background
        color: "#fff",
        padding: "30px 0 0", // smaller padding
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        {/* About Company */}
        <div style={{ flex: "1", minWidth: "220px", marginBottom: "20px" }}>
          <h4
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            ABOUT COMPANY
          </h4>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "3px",
              fontSize: "16px",
            }}
          >
            SRI VINAYAGA FOUNDATION
          </p>
          <p style={{ fontSize: "14px", margin: "5px 0" }}>⭐⭐⭐⭐⭐</p>
          <p style={{ fontSize: "12px", color: "#f1f1f1" }}>
            Rated 5/5 based on 5716 customer ratings
          </p>

          {/* Social Icons */}
          <div style={{ marginTop: "10px" }}>
            {/* Facebook */}
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => hoverEffect(e, "#1877F2")}
              onMouseLeave={(e) => resetEffect(e)}
            >
              <FaFacebookF />
            </a>
            {/* Instagram */}
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) =>
                gradientEffect(
                  e,
                  "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)"
                )
              }
              onMouseLeave={(e) => resetEffect(e)}
            >
              <FaInstagram />
            </a>
            {/* YouTube */}
            <a
              href="#"
              style={iconStyle}
              onMouseEnter={(e) => hoverEffect(e, "#FF0000")}
              onMouseLeave={(e) => resetEffect(e)}
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1", minWidth: "180px", marginBottom: "20px" }}>
          <h4
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            QUICK LINKS
          </h4>
          <ul style={{ listStyle: "none", padding: "0", lineHeight: "1.8" }}>
            {[
              "Home",
              "Our Team",
              "Construction Package",
              "Design Package",
              "Our Works",
              "Interior",
              "Contact Us",
            ].map((item, i) => (
              <li key={i}>
                {item === "Home" ? (
                  <Link
                    to="/"
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#c8facc")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {item}
                  </Link>
                ) : item === "Construction Package" ? (
                  <Link
                    to="/construction-package"
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#c8facc")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {item}
                  </Link>
                ) : item === "Our Team" ? (
                  <Link
                    to="/ourteam"
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#c8facc")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#c8facc")}
                    onMouseLeave={(e) => (e.target.style.color = "#fff")}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1", minWidth: "220px", marginBottom: "20px" }}>
          <h4
            style={{
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            CONTACT INFO
          </h4>
          <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
            No.3, Munusami Koil Street,
            <br />
            Menambedu Ambattur,
            <br />
            Ambattur, Chennai - 600053
          </p>
          <p style={{ marginTop: "5px", fontSize: "13px" }}>
            📞 +91 8122876119
          </p>
          <p style={{ fontSize: "13px" }}>✉ svinayagafoundation@gmail.com</p>
          <p style={{ fontSize: "13px" }}>🌐 www.svg.com</p>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "15px 0" }} />

      {/* Copyright */}
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "white",
          margin: "0",
        }}
      >
        © {new Date().getFullYear()} SRI VINAGAYA FOUNDATION
      </p>
    </footer>
  );
};

/* Common Styles & Hover Functions */
const iconStyle = {
  display: "inline-block",
  color: "#fff",
  border: "1px solid #fff",
  borderRadius: "50%",
  width: "35px",
  height: "35px",
  lineHeight: "35px",
  textAlign: "center",
  marginRight: "8px",
  textDecoration: "none",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

const hoverEffect = (e, color) => {
  e.target.style.backgroundColor = color;
  e.target.style.border = `1px solid ${color}`;
  e.target.style.transform = "scale(1.1)";
};

const gradientEffect = (e, gradient) => {
  e.target.style.background = gradient;
  e.target.style.border = "1px solid transparent";
  e.target.style.transform = "scale(1.1)";
};

const resetEffect = (e) => {
  e.target.style.background = "transparent";
  e.target.style.color = "#fff";
  e.target.style.border = "1px solid #fff";
  e.target.style.transform = "scale(1)";
};

export default Footer;
