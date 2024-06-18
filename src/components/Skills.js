import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a front-end developer, I excel in creating visually appealing
                and responsive web applications using HTML, CSS, and JavaScript.
                My expertise includes using frameworks and libraries such as
                React for building dynamic UIs, Bootstrap and Tailwind CSS for
                designing modern layouts, and ensuring cross-browser
                compatibility and performance optimization.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Next Js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5> Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5> Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Responsive Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5> Redux/ Redux Toolkit</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
