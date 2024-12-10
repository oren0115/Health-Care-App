import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Jumbotron() {
  return (
    <Container>
      <Row className="d-flex flex-column-reverse flex-md-row g-3">
        <Col className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start ">
          <h1 className="mulish-Font900 text-center text-md-start">
            Virtual healthcare for you
          </h1>
          <p className="mulish-Font400 mt-3 text-center text-md-start">
            Healthcare ID provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <form className="w-100 d-flex justify-content-center justify-content-md-start">
            {/* Button submit dengan styling tambahan */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="custom-button rounded-5 mulish-Font500 mt-4">
              Submit
            </Button>
          </form>
        </Col>
        <Col className="col-sm-12 col-md-6 py-5 d-flex justify-content-center">
          <img
            className="w-100"
            src="../src/assets/trafalgar-header.png"
            alt="Jumbotron image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;
