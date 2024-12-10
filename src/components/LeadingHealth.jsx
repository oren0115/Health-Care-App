import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Leadinghealth() {
  return (
    <Container>
      <Row className="d-flex flex-md-row g-3 py-5">
        <Col className="col-sm-12 col-md-6 d-flex justify-content-center">
          <img
            className="w-70"
            src="../src/assets/trafalgar-illustration.png"
            alt="Jumbotron image"
          />
        </Col>
        <Col className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start mt-5">
          <h1 className="mulish-Font900 text-center text-md-start">
            Leading healthcare providers
          </h1>
          <hr className=" custom-underline" />
          <p className="mulish-Font400 mt-3 text-center text-md-start">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver.
          </p>
          <form className="w-100 d-flex justify-content-center justify-content-md-start mt-4">
            {/* Button submit dengan styling tambahan */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="custom-button rounded-5 mulish-Font500 mt-3 mt-md-0">
              Learn more
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Leadinghealth;
