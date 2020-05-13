import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CenteredModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
    </Modal>
  );
}

export default CenteredModal;