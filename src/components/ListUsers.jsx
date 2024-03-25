import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import { EditUser } from "./EditUser";
import { ShowUser } from "./ShowUser";
import { ShowCard } from "./ShowCard";

export const ListUsers = () => {
  const { users, deleteUser, setUsers } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCard, setShowModalCard] = useState(false);

  const [rowData, setRowData] = useState({});

  const handleCloseModal = () => {
    setRowData({});
    setShowModal(false);
  };

  const handleCloseModalEdit = () => {
    setRowData({});
    setShowModalEdit(false);
  };

  const handleCloseModalCard = () => {
    setRowData({});
    setShowModalCard(false);
  };

  const handleShowModal = (user) => {
    setRowData(user);
    setShowModal(true);
  };

  const handleShowModalEdit = (user) => {
    setRowData(user);
    setShowModalEdit(true);
  };

  const handleShowModalCard = (user) => {
    setRowData(user);
    setShowModalCard(true);
  };

  const deleteCard = async (id) => {
    try {
      const response = await fetch(
        `http://localhost/api-servilex/public/api/cards/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await response.json();
      deleteUser(id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (id) => {
    deleteCard(id);
  };

  const getListCards = async () => {
    try {
      const response = await fetch(
        "http://localhost/api-servilex/public/api/cards",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getListCards();
  }, []);

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

      <ShowCard
        show={showModalCard}
        rowData={rowData}
        handleClose={handleCloseModalCard}
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
                    {user.number_card}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-sm  me-2"
                    onClick={() => handleShowModalCard(user)}
                  >
                    <i className="fa-regular fa-credit-card"></i>
                  </button>
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
