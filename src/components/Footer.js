import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h1 class="faisal">&lt; Faisal /&gt;</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end pt-5">
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
