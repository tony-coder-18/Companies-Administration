import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';
import http from "../http";

// create Person Context
const PersonContext = createContext();

// To Use the Context later on
export const usePersonContext = () => {
  return useContext(PersonContext);
};


// create Person Provider
export const PersonProvider = ({children}) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      http
        .get('people')
        .then((res) => {
          setPeople(res.data)
        })
        .catch((error) => {
          console.log(error)
        });
       
    }, [])

    return(
      <PersonContext.Provider value={[people, setPeople]}>
        {children}
      </PersonContext.Provider>
    )
  };