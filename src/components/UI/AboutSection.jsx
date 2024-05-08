import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              We prioritize providing you with exceptional service and ensuring your satisfaction
              Our team is dedicated to delivering a seamless experience tailored to your needs
             You can trust us to meet your expectations and make your car rental process hassle-free
              </p>

              <div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> We prioritize your safety and comfort.
  </p>
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Our vehicles are meticulously maintained to ensure reliability
  </p>
</div>

<div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> We offer flexible booking options to suit your schedule
  </p>
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Our customer service team is here to assist you 24/7
  </p>
</div>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
