import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


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

    const [show, setShow] = useState(false);

    const [modalContent, setModalContent] = useState(0);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = (project) => {
        setModalContent(project);
        setShow(true);
    };

    return (
        <section className="page-section bg-brand" id="portfolio">
            <Modal
                size="lg"
                show={show}
                centered="true"
                onHide={handleClose}
            >
                <ModalHeader>
                    <ModalTitle
                        as="h3">{projectsState[modalContent].name}</ModalTitle>
                </ModalHeader>
                <ModalBody>{projectsState[modalContent].subtitle}</ModalBody>
                <ModalFooter><button className="btn btn-secondary" onClick={handleClose}>Close</button></ModalFooter>
            </Modal>
            <Carousel>
                <Carousel.Item interval={null}>
                    <div className="row mx-auto">
                        {/* first tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(0)}>

                                <i className={projectsState[0].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[0].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>
                        {/* second tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(1)}>

                                <i className={projectsState[1].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[1].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                        {/* third tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(2)}>

                                <i className={projectsState[2].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[2].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                        {/* fourth tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(3)}>

                                <i className={projectsState[3].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[3].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                    </div>
                </Carousel.Item>
                {/* second slide */}
                <Carousel.Item>
                    <div className="row mx-auto">
                        {/* first tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(4)}>

                                <i className={projectsState[4].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[4].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>
                        {/* second tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(5)}>

                                <i className={projectsState[5].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[5].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                        {/* third tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(6)}>

                                <i className={projectsState[6].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[6].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                        {/* fourth tile */}
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                            <button type="button" className="btn" data-toggle="modal" onClick={(e) => handleShow(7)}>

                                <i className={projectsState[7].icon}></i>
                                <h3 className="mb-2 d-block w-100">
                                    {projectsState[7].name}
                                </h3>
                                <p className="text-muted">
                                </p>
                            </button>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );

}
export default Projects;