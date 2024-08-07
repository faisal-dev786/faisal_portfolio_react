import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    // {
    //   title: "https://washi-phi.vercel.app/",
    //   // description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    {
      title: "https://www.forfranky.be/",
      // description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "https://kraeutermax.com/",
      // description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "https://truspin.com/",
      // description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "https://redicalreflex.vercel.app/",
      // description: "Design & Development",
      imgUrl: projImg5,
    },
  ];
  const projects3 = [
    {
      title: "https://washi-phi.vercel.app/",
      // description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "https://skalempire-2023.myshopify.com/",
      // description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "https://murd-chi.vercel.app/",
      // description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "https://acheron.vercel.app/",
      // description: "Design & Development",
      imgUrl: projImg8,
    },
  ];
  const projects2 = [
    {
      title: "https://openpapparazzi.com/",
      // description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "https://muzebox.ca/",
      // description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "https://luceroclinic.ca/",

      imgUrl: projImg11,
    },
    {
      title: "https://events.healthprocanada.com/",
      // description: "Design & Development",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have completed a variety of projects including a modern
                    e-commerce platform with advanced user and admin
                    functionalities, a personal blog website with responsive
                    design and rich text editor, and a data visualization
                    dashboard showcasing interactive and insightful data
                    representations.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          hhh
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
