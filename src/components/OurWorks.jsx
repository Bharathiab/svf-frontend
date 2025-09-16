import React from "react";
import styles from "./OurWorks.module.css"; // ✅ import properly
import Footer from "./Footer";
import Navbar from "./Navbar";

const projects = [
  {
    name: "Mr. Abishek & Mrs. Aishwarya",
    area: "6100 sqft",
    floors: "G+2",
    value: "Rs. 1.2 Cr",
    image: "new1.jpg",
  },
  {
    name: "Mr. Saleem",
    area: "6500 sqft",
    floors: "G+2",
    value: "Rs. 1.25 Cr",
    image: "new7.jpg",
  },
  {
    name: "Mr. Sathish Kumar",
    area: "2590 sqft",
    floors: "G+1",
    value: "Rs. 65 Lakhs",
    image: "new3.jpg",
  },
  {
    name: "Mr. Senthilraj",
    area: "3700 sqft",
    floors: "G+1",
    value: "Rs. 80 Lakhs",
    image: "new2.jpg",
  },
];

const OurWorks = () => {
  return (
    <>
      <Navbar/>
      <div className="mt-5 p-1"><br></br>
      <div className={styles.works} >
        <h2 className={styles["works-title"]}>
          Our Completed <span>Projects</span>
        </h2>
        {projects.map((project, index) => (
          <div className={styles["work-card"]} key={index}>
            <img
              src={project.image}
              alt={project.name}
              className={styles["work-img"]}
            />
            <div className={styles["work-details"]}>
              <p className={styles.customer}><br></br>
                <b className="text-dark">Name of Customer</b>
              </p>
              <p>{project.name}</p>
              <ul>
                <li>
                  ✅ Built-up Area: <b>{project.area}</b>
                </li>
                <li>
                  ✅ No. of Floors: <b>{project.floors}</b>
                </li>
                <li>
                  ✅ Value: <b>{project.value}</b>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default OurWorks;
