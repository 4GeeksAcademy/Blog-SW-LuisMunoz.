import { createContext, useReducer } from "react";

const initialStore = {
  character: [],
  planets: [],
  vehicles: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CHARACTER":
      return { ...state, character: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };

    default:
      return state;
  }
}