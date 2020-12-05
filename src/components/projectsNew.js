import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Projects = (props) => {
  //can use state to populate projects from external source in future
  const [projectsState] = useState([
    {
      link: "https://fantasy-bazaar.herokuapp.com/",
      name: "Fantasy Bazaar",
      subtitle: "React PWA for Tabletop RPG games",
      icon: "fas fa-store-alt fa-4x"
    },
    {
      link: "https://shawnatx.github.io/project-1/",
      name: "Cocktail Bar",
      subtitle: "Fancy trying a new drink?",
      icon: "fas fa-cocktail fa-4x"
    },
    {
      link: "https://shawnatx.github.io/Daily-Scheduler/",
      name: "Daily Schedule App",
      subtitle: "Keep it all together.",
      icon: "fas fa-calendar-alt fa-4x"
    },
    {
      link: "https://shawnatx.github.io/JS-password-generator/",
      name: "Password Generator",
      subtitle: "Client-side safety.",
      icon: "fas fa-unlock-alt fa-4x"
    },
    {
      link: "https://github.com/ShawnATX/node-readme-generator",
      name: "README Generator",
      subtitle: "Documentation is key.",
      icon: "fab fa-markdown fa-4x"
    },
    {
      link: "https://shawnatx.github.io/Weather-Dashboard/",
      name: "Weather Dashboard",
      subtitle: "Stay ahead of the game.",
      icon: "fas fa-cloud-sun-rain fa-4x"
    },
    {
      link: "https://dry-woodland-14799.herokuapp.com/index",
      name: "Burger Database",
      subtitle: "Consume mass quantities.",
      icon: "fas fa-hamburger fa-4x"
    },
    {
      link: "https://shawnatx.github.io/Speed-Reading-Game/",
      name: "Speed Reading Game",
      subtitle: "With a poetic twist.",
      icon: "fas fa-book-reader fa-4x"
    },
  ]);

  return (
    <section className="page-section bg-brand" id="portfolio">
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fillmurray.com/800/400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fillmurray.com/800/400"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );

}
export default Projects;