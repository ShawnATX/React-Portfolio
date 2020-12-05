//the Project component is holding both the carousel link and the modal content. Each modal is defaulting to hidden

import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


const Project = (props) => {
    const { project } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false); 
    };
    const handleShow = () => {
        setShow(true);
        };
        
    return (
        <div className="row mx-auto">

            <div className="col-lg-3 col-md-6 col-sm-12 text-center mx-auto">
                <button type="button" className="btn" data-toggle="modal" onClick={handleShow}>

                    <i className={project.icon}></i>
                    <h3 className="mb-2 d-block w-100">
                        {project.name}
                    </h3>
                    <p className="text-muted">
                        {/* {project.subtitle} */}
                    </p>
                </button>
            </div>
            <Modal
                size="lg"
                show={ show }
                centered="true"
                onHide={handleClose}
            >
                <ModalHeader>
                    <ModalTitle
                        as="h3">{ project.name }</ModalTitle>
                </ModalHeader>
                <ModalBody>{ project.subtitle }</ModalBody>
                <ModalFooter><button className="btn btn-secondary" onClick={handleClose}>Close</button></ModalFooter>
            </Modal>
        </div>
    );
}

export default Project;
