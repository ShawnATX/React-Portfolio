import React from 'react';
import ProjectModal from "./projectModal";


const Project = (props) => {
    const { project } = props;
    return (
        <div className="col-lg-3 col-md-6 text-center">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            <a target="_blank" href={project.link} rel="noopener noreferrer">
                <i className={project.icon}></i>
                <h3 className="mb-2 d-block w-100">
                    {project.name}
                </h3>
                <p className="text-muted">
                    {project.subtitle}
                </p>
            </a>
        </div>
    );
}

export default Project;
