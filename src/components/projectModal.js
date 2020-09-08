import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


const ProjectModal = (props) => {
    const { project } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.onShowModal(false);
        setShow(false); 
    };
    const handleShow = () => {
        props.onShowModal(true);
        setShow(true);
        };

return (

    <Modal 
        size="lg"
        show={ show }
        onHide={handleClose}>
      <ModalHeader>
        <ModalTitle>{ project.title }</ModalTitle>
      </ModalHeader>
      <ModalBody>{ project.icon }</ModalBody>
      <ModalFooter>{ project.subtitle }</ModalFooter>
    </Modal>
)

}

export default ProjectModal;

