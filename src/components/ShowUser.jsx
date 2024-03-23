import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const ShowUser = ({ show, rowData, handleClose }) => {
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
  } = rowData;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <i className="fa-solid fa-user"></i> Información Usuario
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
            size="sm"
            disabled
            required
          />
        </Form.Group>

        <Row className="mb-2">
          <Form.Group as={Col} md="4" controlId="validationDayVenc">
            <Form.Label>Mes</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nro. tarjeta"
                name="expiration_month"
                defaultValue={expiration_month}
                size="sm"
                disabled
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationYearVenc">
            <Form.Label>Año</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Nro. tarjeta"
                name="expiration_year"
                defaultValue={expiration_year}
                size="sm"
                disabled
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCodeSecurity">
            <Form.Label>Codigo de seguridad</Form.Label>
            <Form.Control
              type="text"
              placeholder="0000"
              name="security_code"
              defaultValue={security_code}
              size="sm"
              disabled
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
              size="sm"
              disabled
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
              size="sm"
              disabled
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
                size="sm"
                disabled
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
              size="sm"
              disabled
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
              size="sm"
              disabled
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
              size="sm"
              disabled
              required
            />
          </Form.Group>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ShowUser.defaultProps = {
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

ShowUser.propTypes = {
  show: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func,
};
