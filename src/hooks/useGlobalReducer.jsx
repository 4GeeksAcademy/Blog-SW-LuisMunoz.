// src/hooks/useGlobalReducer.jsx
import { createContext, useReducer, useContext } from "react";
import storeReducer, { initialStore } from "../Store";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  const addFavorite = (favorite) => {
    dispatch({ type: "ADD_FAVORITE", payload: favorite });  
  };

  const removeFavorite = (favorite) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: favorite });  
  };


  return (
    <StoreContext.Provider value={{ store, dispatch, actions: { addFavorite, removeFavorite } }}>
      {children}
    </StoreContext.Provider>
  );
};


export default function useGlobalReducer() {
  const { store, dispatch, actions } = useContext(StoreContext);
  return { store, dispatch, actions };
}