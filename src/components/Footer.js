import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-md-start" size={12} sm={6}>
            <img className="footer-logo" src="/logo.png" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/faisalnadeem108/"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="mailto:faisalnadeem1080@gmail.com">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="tel:+923076169088">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p> Copyright {currentYear}. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
