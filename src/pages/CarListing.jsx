import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/car-listing.css";

const CarListing = () => {
  const [sortedCars, setSortedCars] = useState(carData);

  const handleSortChange = (value) => {
    let sorted = [...carData];
    switch (value) {
      case "low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setSortedCars(sorted);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="sort-section">
                <div className="sort-label">
                  <i className="ri-sort-asc"></i> Sort By
                </div>
                <select className="sort-select" onChange={(e) => handleSortChange(e.target.value)}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
