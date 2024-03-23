import { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { EditUser } from "./EditUser";
import { ShowUser } from "./ShowUser";

export const ListUsers = () => {
  const { users, deleteUser } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [rowData, setRowData] = useState({});

  const handleCloseModal = () => {
    setRowData({});
    setShowModal(false);
  };

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleShowModal = (user) => {
    setRowData(user);
    setShowModal(true);
  };

  const handleShowModalEdit = (user) => {
    setRowData(user);
    setShowModalEdit(true);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <>
      <ShowUser
        show={showModal}
        rowData={rowData}
        handleClose={handleCloseModal}
      />

      <EditUser
        show={showModalEdit}
        rowData={rowData}
        handleClose={handleCloseModalEdit}
      />

      <Table className="my-4 table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Nro. tarjeta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <span className="badge text-bg-primary">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>
                  <span className="badge text-bg-secondary">
                    <i className="fa-regular fa-credit-card"></i>{" "}
                    {user.number_card}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm  me-2"
                    onClick={() => handleShowModal(user)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    onClick={() => handleShowModalEdit(user)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
