import { types } from "../types/types";

export const userInitialState = {
  users: [
    // {
    //   id: "1",
    //   name: "Edgard",
    //   lastname: "Lozano Ramos",
    //   email: "edgard@gmail.com",
    //   adress: "av las peñas",
    //   city: "Arequipa",
    //   phone: "+51983673123",
    //   number_card: "123324211111",
    //   expiration_month: "12",
    //   expiration_year: "2025",
    //   security_code: "1111",
    // },
  ],
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE:
      return {
        ...state,
        users: [...state.users, action.payload],
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
    case types.INDEX:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
