import { types } from "../types/types";

export const userInitialState = {
  users: [
    {
      id: "1",
      name: "Edgard",
      lastname: "Lozano Ramos",
      email: "edgard@gmail.com",
      adress: "av las peñas",
      city: "Arequipa",
      phone: "+51983673123",
      number_card: "123324211111",
      expiration_month: "12",
      expiration_year: "2025",
      security_code: "1111",
    },
    {
      id: "2",
      name: "Marina Etiane",
      lastname: "Flores Gallegos",
      email: "marina@gmail.com",
      adress: "av las peñas",
      city: "Arequipa",
      phone: "+51983673123",
      number_card: "23423423424234",
      expiration_month: "12",
      expiration_year: "2024",
      security_code: "1111",
    },
  ],
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case types.UPDATE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          } else {
            return user;
          }
        }),
      };
    case types.DELETE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};
