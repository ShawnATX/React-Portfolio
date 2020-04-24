import React, { useState } from 'react';
import ProjectSlide from "./projectSlide";


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
            <div className="container">
                <h2 className="text-center">My Portfolio</h2>
                <hr className="divider my-5 mx-5" />
                <div className="row mt-4">
                    {/*  carousel wrapper  */}
                    <div id="portfolio-carousel" className="carousel slide w-100" data-ride="carousel">
                        {/* <!-- carousel indicators --> */}
                        <ol className="carousel-indicators">
                            <li id="indicator-0" data-target="portfolio-carousel" data-slide-to="0" className="active"></li>
                            <li id="indicator-1" data-target="portfolio-carousel" data-slide-to="1"></li>
                        </ol>
                        {/*  slides */}
                        <div className="carousel-inner"></div>
                        <ProjectSlide projects={[projectsState[0], projectsState[1], projectsState[2], projectsState[3]]} slide={0} active={true}/>
                        <ProjectSlide projects={[projectsState[4], projectsState[5], projectsState[6], projectsState[7]]} slide={1} />

                        <a className="carousel-control-prev" href="#portfolio-carousel" role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon p-0 m-0" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next p-0 m-0" href="#portfolio-carousel" role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;

