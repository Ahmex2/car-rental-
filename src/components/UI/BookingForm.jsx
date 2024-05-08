import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../../styles/booking-form.css';

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    
    // form submission logic
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const fromAddress = formData.get('fromAddress');
    const toAddress = formData.get('toAddress');
    const numPersons = formData.get('numPersons');
    const numLuggage = formData.get('numLuggage');
    const journeyDate = formData.get('journeyDate');
    const journeyTime = formData.get('journeyTime');
    const message = formData.get('message');

    const whatsappMessage = `
      New Booking Request:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      From Address: ${fromAddress}
      To Address: ${toAddress}
      Number of Persons: ${numPersons}
      Number of Luggage: ${numLuggage}
      Journey Date: ${journeyDate}
      Journey Time: ${journeyTime}
      Message: ${message}
    `;

    const whatsappLink = `https://api.whatsapp.com/send?phone=+201206694291&text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappLink;

    // Update the submitted state
    setSubmitted(true);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Form onSubmit={submitHandler}>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" name="firstName" placeholder="First Name" required />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" name="lastName" placeholder="Last Name" required />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="email" name="email" placeholder="Email" required />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="tel" name="phoneNumber" placeholder="Phone Number" required />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" name="fromAddress" placeholder="From Address" required />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" name="toAddress" placeholder="To Address" required />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select name="numPersons" required>
                  <option value="">Select Number of Persons</option>
                  <option value="1 person">1 Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5+ person">5+ Person</option>
                </select>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <select name="numLuggage" required>
                  <option value="">Select Number of Luggage</option>
                  <option value="1 luggage">1 Luggage</option>
                  <option value="2 luggage">2 Luggage</option>
                  <option value="3 luggage">3 Luggage</option>
                  <option value="4 luggage">4 Luggage</option>
                  <option value="5+ luggage">5+ Luggage</option>
                </select>
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="date" name="journeyDate" placeholder="Journey Date" required />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="time" name="journeyTime" placeholder="Journey Time" className="time__picker" required />
              </FormGroup>

              <FormGroup>
                <textarea rows={5} name="message" className="textarea" placeholder="Write"></textarea>
              </FormGroup>

              {/* Change button text based on submission status */}
              <button type="submit" className="btn btn-primary">{submitted ? "Reserve Now" : "Submit"}</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookingForm;
