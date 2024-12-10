import React from "react";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import reviews from "../utils/reviewsData"; // Impor data review

function Testimonials() {
  return (
    <Container className="testimonials-bg">
      <div className="text-center mb-4">
        <h1 className="mulish-Font900 text-white">
          What our customers are saying
        </h1>
        <hr
          className="mx-auto"
          style={{ width: "100px", border: "2px solid white" }}
        />
      </div>
      <Carousel indicators={false}>
        {" "}
        {/* Menghilangkan tombol navigasi */}
        {reviews.map((review) => (
          <Carousel.Item key={review.id} interval={2000}>
            <Row className="align-items-center text-white">
              {/* Kolom Foto */}
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <Image
                  src={review.photo}
                  roundedCircle
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    border: "3px solid white",
                  }}
                  alt={`${review.name}'s photo`}
                />
                <h4 className="mt-3 mulish-Font700">{review.name}</h4>
              </Col>
              {/* Kolom Komentar */}
              <Col xs={12} md={8} className="text-center text-md-start">
                <p className="mulish-Font400 fs-5 px-3 px-md-0">
                  "{review.comment}"
                </p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Testimonials;
