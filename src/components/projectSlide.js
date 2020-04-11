import React from 'react'
import Project from "./project";

const ProjectSlide = (props) => {

    return (
        <div>
            {/* //  carousel slide (4 items)  */}
            {props.active ?
                (
                    <div className="carousel-item active" data-slide-to={props.slide}>
                        <div className="row">
                            {props.projects.map((project) => <Project project={project} key={project.name} />)}
                        </div>
                    </div>
                ) : (
                    <div className="carousel-item" data-slide-to={props.slide}> 
                        <div className="row">
                            {props.projects.map((project) =>
                                <Project project={project} key={project.name} />
                            )}
                        </div>
                    </div>
                )}
                </div>
    );
}

export default ProjectSlide;
