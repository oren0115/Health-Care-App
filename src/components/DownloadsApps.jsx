import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function DownloadsApps() {
  return (
    <Container>
      <Row className="d-flex flex-column-reverse flex-md-row g-3 mt-5">
        <Col className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <h1 className="mulish-Font900 text-center text-md-start">
            Download our mobile apps
          </h1>
          <p className="mulish-Font400 mt-3 text-center text-md-start">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <form className="w-100 d-flex justify-content-center justify-content-md-start">
            {/* Button submit dengan styling tambahan */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="custom-button rounded-5 mulish-Font500 mt-4">
              Download
            </Button>
          </form>
        </Col>
        <Col className="col-12 col-md-8 py-5 d-flex justify-content-center">
          <img
            className="w-70"
            src="./src/assets/trafalgar-illustration sec03.png"
            alt="Jumbotron image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DownloadsApps;
