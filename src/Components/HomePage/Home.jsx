import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Contact from './Contact'
import '../../Style/Home.css'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import Baby1 from '../../assets/baby1.png'
import Icon from '../../assets/icon.png'
import auth from '../auth'
import About from "../../Container/About";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnalysisPrediction from '../HomePage/AnalysisPrediction'



export default function Home(props) {
  const [collapsed, setToggle] = useState(false)
  const history = useHistory()
  const [nav, setNav] = useState({
    "home": true,
    "predict": false,
    "about": false,
    "contact": false
  })

  useEffect(() => {
    console.log("called toasr")
    if (auth.isAuthenticated())
      toast.success("Login Successful");
  }, [])

  const handleTogglerClick = () => {
    setToggle(!collapsed)
  };

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={handleTogglerClick}
    />
  );
  const loc = {
    "home": 0,
    "predict": 750,
    "about": 1500,
    "contact": 2240
  }
  const changeNav = (index) => {
    window.scrollTo(0, loc[index])
    let temp = { ...nav }
    temp.home = false;
    temp.predict = false;
    temp.about = false;
    temp.contact = false;
    temp[index] = true;
    setNav(temp)
  }

  return (
    <div id="apppage" className="apppage">
      <Router>
        <div>
          <MDBNavbar
            color="primary-color"
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                {/* <strong className="white-text">MDB</strong> */}
                <img src={Icon} alt="" className="home-logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active={nav.home}>
                    <MDBNavLink to="#" onClick={() => changeNav("home")}>Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active={nav.predict}>
                    <MDBNavLink to="#more" onClick={() => changeNav("predict")}>Prediction</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active={nav.about}>
                    <MDBNavLink to="#about" onClick={() => changeNav("about")}>Crew</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active={nav.contact}>
                    <MDBNavLink to="#contact" onClick={() => changeNav("contact")}>Contact us</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className="md-form my-0 ">
                        {/* <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          /> */}
                        <MDBBtn color="white" onClick={() => { auth.logout(() => props.history.push('/')) }}>Logout</MDBBtn>
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
      </Router>
      <MDBView className="home">
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5"
              >
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Baby Cry Analysis
                    </h1>
                  <hr className="hr-light" />
                  <h5 className="mb-4">
                    <strong>Baby Cry Analysis</strong> is to detect a cry signals of infants and reason behind the cries such as,Bellypain, Burp, Coldhot, Discomfort, Hunger, Lonely, Scared, Tired.Under the age of (0-6 months).
   By using <b>" Machine-learning "</b> algorithms.Click the below link to detected the various emotion of your baby cries.
                    </h5>
                  {/* <MDBBtn color="white">Download</MDBBtn> */}
                  <a href="#more">
                    <MDBBtn outline color="white">
                      Learn More
                  </MDBBtn>
                  </a>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src={Baby1}
                    alt=""
                    className="img-fluid home-Baby1"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>

      <MDBContainer id="more">
        <MDBRow className="py-5">
          <MDBCol md="12" className="text-center">
            <AnalysisPrediction />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <About />
      <Contact />
      <ToastContainer />
    </div >
  )
}

