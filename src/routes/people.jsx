import React, { useEffect, useState} from 'react';
import TableListPeople from '../components/table-list/table-list-people';
import { usePersonContext } from "../context/PersonContext";
import http from "../http";

export default function People() {

    // Cnsumir CompanyContext
    //Pasar comapnies como prop
    const [people, setPeople] = usePersonContext();
    const [namesCompanies, setNamesCompanies] = useState([]);

    useEffect(() => {
        //Get the company name of each person
        people.forEach(el => {
            http
            .get(`companies/${el.companyId}`)
            .then((res) => {
              setNamesCompanies(current => [...current, res.data.name])
            })
            .catch((error) => {
              console.log(error)
            });
        });
    }, [people])

    return (
        <div>
            <h1>List of People</h1>

            <TableListPeople data={people} companies={namesCompanies} />
        </div>
    );
}
