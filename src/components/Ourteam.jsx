import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Ourteam.css';
import our1 from '../assets/our1.png';
import our2 from '../assets/our2.png';
import our3 from '../assets/our3.png';

const Ourteam = () => {

  return (
    <div>
      <Navbar />
      <div className="container mt-5"><br></br><br></br>
        <h1 className="h1 text-center text-danger">O U R  <span>T E A M</span></h1>
      </div>
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-12 col-md-4">
            <div className="card fixed-height-card border-0">
              <img src={our1} className="card-img-fixed image" alt="Team member 1" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="card cards w-100 h-100 p-4 border-0">
              <div className="icon"><i className="fa fa-quote-right"></i></div>
              <div className="text-center mt-4">
                <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', textShadow: '2px 2px 3px black' }}>Making Dreams<br />Come True</h1>
              </div>
              <div className="text-center mt-5">
                <p className="ms-5 me-5">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
              </div>
              <div className="text-center mt-5">
                <p className="p">Jessica Moore <br />Co-Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br>
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-sm-12 col-md-8 order-md-1 order-2">
            <div className="card cards w-100 h-100 p-4 border-0">
              <div className="icon"><i className="fa fa-quote-right"></i></div>
              <div className="text-center mt-4">
                <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', textShadow: '2px 2px 3px black' }}>Turning a Vision<br />into Reality</h1>
              </div>
              <div className="text-center mt-5">
                <p className="ms-5 me-5">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
              </div>
              <div className="text-center mt-5">
                <p className="p">Angela Bradshow <br />Co-Founder & Creative Director</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 order-md-2 order-1">
            <div className="card fixed-height-card border-0">
              <img src={our2} className="card-img-fixed image" alt="Team member 2" />
            </div>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br>
      <div className="container mt-5">
        <div className="row g-5">
          <div className="col-sm-12 col-md-4">
            <div className="card fixed-height-card border-0">
              <img src={our3} className="card-img-fixed image" alt="Team member 3" />
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="card cards w-100 h-100 p-4 border-0">
              <div className="icon"><i className="fa fa-quote-right"></i></div>
              <div className="text-center mt-4">
                <h1 style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', textShadow: '2px 2px 3px black' }}>A Perfectionist on<br />Every Detail</h1>
              </div>
              <div className="text-center mt-5">
                <p className="ms-5 me-5">I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
              </div>
              <div className="text-center mt-5">
                <p className="p">Remy Sellers<br />Co-Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div><br></br><br></br>
      <Footer />
    </div>
  );
};

export default Ourteam;
