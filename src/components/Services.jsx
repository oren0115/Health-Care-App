import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import servicesData from "../utils/servicesData"; // Impor servicesData

function Services() {
  return (
    <Container>
      {/* Section Header */}
      <Row className="mb-4">
        <Col className="text-center col-12 col-md-8 offset-md-2 py-5">
          <h1 className="mulish-Font900">Our Services</h1>
          <hr className=" custom-underline mx-auto" />
          <p className="mulish-Font500">
            We provide you with the best choices. Adjust to your health needs
            and consult our highly qualified doctors for the service that best
            suits you.
          </p>
        </Col>
      </Row>

      {/* Services Cards */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {servicesData.map((service) => (
          <Col key={service.id} className="d-flex">
            <Card
              className="shadow rounded-4 mx-auto border-0 hover-card"
              onClick={() => {
                // Tambahkan fungsi yang ingin dipanggil saat klik
                console.log(`Card ${service.title} clicked`);
              }}
              style={{ cursor: "pointer" }} // Memberikan efek kursor tangan saat hover
            >
              <Card.Body>
                <div className="d-flex flex-column ">
                  <i className={`${service.iconClass} fs-1 mb-3`}></i>
                  <img
                    src={service.imgSrc}
                    alt={`${service.title} Icon`}
                    className="img-fluid mb-3 icon-card"
                    style={{ maxWidth: "90px" }}
                  />
                  <Card.Title className="fw-bold mulish-Font500 mt-5">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="fs-5 mulish-Font400">
                    {service.text}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Submit Button Form */}
      <Row className="mt-4 d-flex justify-content-center py-5">
        <Col className="d-flex justify-content-center">
          <form className="w-100 d-flex justify-content-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="custom-button rounded-5 mulish-Font500">
              Learn More
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
