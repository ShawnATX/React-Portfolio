import React from 'react'

const Project = (props) => {
    const { project } = props;
    return (
        <div className="col-lg-3 col-md-6 text-center">
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
