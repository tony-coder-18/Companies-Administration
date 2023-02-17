import React, { createContext, useState, useEffect, useContext } from 'react';

import http from "../http";

// create Company Context
const CompanyContext = createContext();

// To Use the Context later on
export const useCompanyContext = () => {
  return useContext(CompanyContext);
};

// create Company Provider
export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  // get all Companies
  useEffect(() => {
    http
      .get('companies')
      .then((res) => {
        setCompanies(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // add new company
  const createNewCompany = async (data) => {
    await http.post("companies", data);
  };

  // update a company entry
  const updateCompany = async (companyId, data) => {
    await http.put(`companies/${companyId}`, data);
  };
  // delete a company entry
  const deleteCompany = async (companyId) => {
    await http.delete(`companies/${companyId}`);
  };

  const value = {
    companies,
    createNewCompany,
    updateCompany,
    deleteCompany
  }

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  )
};