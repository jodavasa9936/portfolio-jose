import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Facebook clone",
      description:
        "Build Facebook clone with react, and the mern stuck and google cloud console.",
      imgUrl:
        "https://img.freepik.com/vector-premium/ilustracion-vectorial-icono-redes-sociales-facebook_534308-21672.jpg?semt=ais_incoming&w=740&q=80",
      link: "https://github.com/jose9916/faceclone/tree/master",
    },
    {
      title: "Professional E-commerce",
      description:
        "Full-stack MERN e-commerce platform using Redux and Firebase.",
      imgUrl:
        "https://imageio.forbes.com/specials-images/imageserve/6419b4476af64ebf89bdef19/e-commerce/960x0.jpg?format=jpg&width=960",
      link: "https://github.com/davidsanchez9936/eccomerce",
    },
    {
      title: "Hosted Instagram",
      description:
        "Instagram-style social media application built with the MERN stack.",
      imgUrl:
        "https://images.macrumors.com/t/8RN41frzMRZoASyuCP_XWRkMhng=/1200x1200/smart/article-new/2021/03/Instagram-Feature-2.jpg",
      link: "https://github.com/jodavasa9936/hosted-insta28",
    },
    {
      title: "E-commerce React App",
      description:
        "A frontend e-commerce app developed using React and styled components.",
      imgUrl:
        "https://pagecreative.co.uk/wp-content/uploads/2023/10/AdobeStock_223290240-1-2-scaled.jpeg",
      link: "https://jodavasa9936.github.io/ecommerce/",
    },
    {
      title: "Movie Search App",
      description:
        "React-based movie search application using an external API.",
      imgUrl:
        "https://cdn.avpasion.com/wp-content/uploads/2023/01/netflix-1-750x536.jpg",
      link: "https://jodavasa9936.github.io/buscador-peliculas/",
    },
    {
      title: "Task Manager",
      description:
        "A task management tool built with React for tracking to-dos.",
      imgUrl:
        "https://raddevon.com/static/7bdceb1544f6f4a90c15fd3e2656f815/react.jpg",
      link: "https://jodavasa9936.github.io/react-task/",
    },
    {
      title: "Shopping Cart App",
      description:
        "A functional shopping cart built with React and custom hooks.",
      imgUrl:
        "https://img.freepik.com/vector-gratis/ilustracion-concepto-pagina-web-comercio-electronico_114360-8204.jpg?w=2000",
      link: "https://jodavasa9936.github.io/carrito_de_compras/",
    },
    {
      title: "Redux State Management",
      description:
        "A demonstration project using Redux for global state management in React.",
      imgUrl:
        "https://programacion.net/files/article/20170428010447_pokemon.jpg",
      link: "https://jodavasa9936.github.io/redux/",
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
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
