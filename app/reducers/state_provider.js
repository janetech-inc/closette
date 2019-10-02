import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateProvider = () => useContext(Context);
