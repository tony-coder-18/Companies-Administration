import React, { useEffect } from 'react';
import TableListComp from '../components/table-list/table-list-comp';
import { useCompanyContext } from "../context/CompanyContext";

export default function Companies() {

    // Cnsumir CompanyContext
    //Pasar comapnies como prop
    const { companies, setCompanies } = useCompanyContext();

    useEffect(() => {
        console.log(companies)
    }, [companies]);

    return (
        <div>
            <h1>List of Companies</h1>

            <TableListComp data={companies} />
        </div>
    );
}

