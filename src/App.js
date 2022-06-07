import "./css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  } from "react";

import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { Button, Modal } from 'react-bootstrap';

import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function MyVerticallyCenteredModal(props) {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add TODO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Add TODO</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}

        <Todos/>

      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
    </>
  );
}

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        {/* <Todos /> */}
        <DisplayTodos />
      </motion.div>
    </div>

      <Button style={{backgroundColor: "transparent", outline: "none"}} className="bottom-button" onClick={() => setModalShow(true)}>
         <FontAwesomeIcon icon={faPlusCircle} style={{fontSize: 60, color: "green"}} />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
