import React from 'react';
import Project from "./project";

const ProjectSlide = (props) => {

    return (
        <div className="mx-auto">
            {/* //  carousel slide (4 items)  */}
            {props.active ?
                (
                    <div className="carousel-item active mx-auto" data-slide-to={props.slide}>
                        <div className="row mx-auto">
                            {props.projects.map((project) => 
                                <Project project={project} key={project.name} />)}
                        </div>
                    </div>
                ) : (
                    <div className="carousel-item mx-auto" data-slide-to={props.slide}> 
                        <div className="row mx-auto">
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
