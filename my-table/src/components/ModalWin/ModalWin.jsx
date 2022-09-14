import React, { useState } from "react";
import style from "./style_modul.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

export default function Example({ show, setShow, getInfo }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: 41,
    namber: "+996 948 136 085",
    address: "Карпинка 113",
    salary: "500$",
  });

  const handleClose = () => setShow(false);

  const onFinish = () => {
    handleClose();
    setPost(inputs)
  }

  async function setPost(obj) {
    await axios.post(`http://localhost:305/item`, obj);
    getInfo()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-g" closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-blk">
          <h5>Имя</h5>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setInputs({...inputs, name:e.target.value})}
            />
          </InputGroup>

          <h5>Возраст</h5>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Age"
              aria-label="Age"
              aria-describedby="basic-addon1"
              onChange={(e) => setInputs({...inputs, age:e.target.value})}

            />
          </InputGroup>

          <h5>Номер</h5>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="number"
              aria-label="number"
              aria-describedby="basic-addon1"
              onChange={(e) => setInputs({...inputs, namber:e.target.value})}
            />
          </InputGroup>

          <h5>Адрес</h5>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="address"
              aria-label="address"
              aria-describedby="basic-addon1"
              onChange={(e) => setInputs({...inputs, address:e.target.value})}

            />
          </InputGroup>

          <h5>ЗП</h5>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" onChange={(e) => setInputs({...inputs, salary:e.target.value})} />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer className="modal-g">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={() => onFinish()}
            variant="primary"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
