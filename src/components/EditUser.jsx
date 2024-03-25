import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { generateMonths } from "../utilities/generate-months";
import { generateYears } from "../utilities/generate-years";
import { UserContext } from "../context/UserContext";

export const EditUser = ({ show, rowData, handleClose }) => {
  const { updateUser } = useContext(UserContext);
  const [validated, setValidated] = useState(false);

  const initState = {
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
  };
  const [formData, setFormData] = useState(initState);

  useEffect(() => {
    setFormData(rowData);
  }, [rowData]);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleReset = () => {
    setFormData(initState);
  };

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
  } = formData;

  const handleHide = () => {
    handleReset();
    setValidated(false);
    handleClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity()) {
      updateCard(formData);
      handleHide();
    }
  };

  const updateCard = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL_API}/api-servilex/public/api/cards/${
          data.id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      updateUser(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fa-solid fa-user"></i> Editar usuario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="validationNroCard" className="mb-2">
            <Form.Label>Nro. de la Tarjeta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nro. tarjeta"
              name="number_card"
              defaultValue={number_card}
              onChange={handleChange}
              minLength={16}
              maxLength={16}
              size="sm"
              required
            />
          </Form.Group>

          <Row className="mb-2">
            <Form.Group as={Col} md="4" controlId="validationDayVenc">
              <Form.Label>Dia</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  aria-label="Default select example"
                  as="select"
                  type="select"
                  name="expiration_month"
                  value={expiration_month}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                defaultValue={security_code}
                onChange={handleChange}
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
                defaultValue={name}
                onChange={handleChange}
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
                defaultValue={lastname}
                onChange={handleChange}
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
                  defaultValue={email}
                  onChange={handleChange}
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
                defaultValue={adress}
                onChange={handleChange}
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
                defaultValue={city}
                onChange={handleChange}
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
                defaultValue={phone}
                onChange={handleChange}
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
  );
};

EditUser.defaultProps = {
  rowData: {
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
  },
};

EditUser.propTypes = {
  show: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func,
};
