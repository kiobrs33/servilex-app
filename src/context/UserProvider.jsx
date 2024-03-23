import PropTypes from "prop-types";
import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { userInitialState, userReducer } from "../reducer/userReducer";
import { types } from "../types/types";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  const createUser = (user) => {
    dispatch({
      type: types.CREATE,
      payload: user,
    });
  };

  const updateUser = (user) => {
    dispatch({
      type: types.UPDATE,
      payload: user,
    });
  };

  const deleteUser = (id) => {
    dispatch({
      type: types.DELETE,
      payload: { id },
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: types.INDEX,
      payload: { users },
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        createUser,
        updateUser,
        deleteUser,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any,
};
