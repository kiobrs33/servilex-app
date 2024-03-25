import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { addSpaceText } from "../utilities/add-espace-text";
import Chip from "../assets/images/chip.png";

export const ShowCard = ({ show, rowData, handleClose }) => {
  const nameUser = `${rowData.name} ${rowData.lastname}`.toUpperCase();
  const expirationUser =
    `${rowData.expiration_month} / ${rowData.expiration_year}`.toUpperCase();

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Tarjeta de credito</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <div className="card-credit">
            <div className="card-credit__chip">
              <img
                src={Chip}
                alt="chip-card-credit"
                className="card-credit__chip-image"
              />
            </div>
            <div className="card-credit__number">
              <h1>{addSpaceText(rowData.number_card)}</h1>
            </div>
            <div className="card-credit__info">
              <div className="card-credit__name">
                <span>{nameUser}</span>
              </div>
              <div className="card-credit__expiration-date">
                <span>VENCE</span>
                <div>
                  <span>{expirationUser}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ShowCard.defaultProps = {
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

ShowCard.propTypes = {
  show: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func,
};
