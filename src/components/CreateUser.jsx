import { useContext, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { generateMonths } from "../utilities/generate-months";
import { generateYears } from "../utilities/generate-years";
import { useForm } from "../hooks/useForm";
import { UserContext } from "../context/UserContext";

export const CreateUser = () => {
  const { createUser } = useContext(UserContext);
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [formValues, handleInputChange, handleReset] = useForm({
    name: "",
    lastname: "",
    email: "",
    adress: "",
    city: "",
    phone: "",
    number_card: "",
    expiration_month: "",
    expiration_year: "",
    security_code: "",
  });

  const {
    name,
    lastname,
    email,
    adress,
    city,
    phone,
    number_card,
    expiration_month,
    expiration_year,
    security_code,
  } = formValues;

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setValidated(false);
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (form.checkValidity()) {
      postCard(formValues);
      handleReset();
      handleClose();
    }
  };

  const postCard = async (data) => {
    try {
      const response = await fetch(
        "http://localhost/api-servilex/public/api/cards",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      createUser(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="success" onClick={handleShow}>
          <i className="fa-solid fa-user-plus"></i> Crear nuevo usuario
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fa-solid fa-user"></i> Nuevo usuario
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="validationNroCard" className="mb-2">
              <Form.Label>Nro. de la Tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nro. tarjeta"
                name="number_card"
                value={number_card}
                onChange={handleInputChange}
                size="sm"
                required
              />
            </Form.Group>

            <Row className="mb-2">
              <Form.Group as={Col} md="4" controlId="validationDayVenc">
                <Form.Label>Mes</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    aria-label="Default select example"
                    as="select"
                    type="select"
                    name="expiration_month"
                    value={expiration_month}
                    onChange={handleInputChange}
                    size="sm"
                    required
                  >
                    <option value="">--</option>
                    {generateMonths().map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Control>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationYearVenc">
                <Form.Label>Año</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    aria-label="Default select example"
                    as="select"
                    type="select"
                    name="expiration_year"
                    value={expiration_year}
                    onChange={handleInputChange}
                    size="sm"
                    required
                  >
                    <option value="">--</option>
                    {generateYears().map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </Form.Control>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCodeSecurity">
                <Form.Label>Codigo de seguridad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0000"
                  name="security_code"
                  value={security_code}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group controlId="validationName" as={Col} md="6">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombres"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
              <Form.Group controlId="validationLastname" as={Col} md="6">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apellidos"
                  name="lastname"
                  value={lastname}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group controlId="validationEmail" as={Col} md="6">
                <Form.Label>Correo Electrónico</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico."
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    size="sm"
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="validationAdress" as={Col} md="6">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Direccion"
                  name="adress"
                  value={adress}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="validationCity" as={Col} md="6">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ciudad"
                  name="city"
                  value={city}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
              <Form.Group controlId="validationPhone" as={Col} md="6">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+ Codigo Telefono"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  size="sm"
                  required
                />
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" size="sm" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
