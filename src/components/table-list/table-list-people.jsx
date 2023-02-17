import React from 'react';

export default function TableListPeople({data, companies}) {
    
    return (
        <div>
            <div className='table-head'>
               <span>Name</span>
               <span>E-mail</span>
               <span>Company</span>
               <span></span>
            </div>
            <div className='table-body'>
                {data.map((res, idx) => {
                    return (
                        <div>
                            <span>{res.name}</span>
                            <span>{res.email}</span>
                            <span>{companies[idx]}</span>
                            <span>
                                <button>View</button>
                                <button>Edit</button>
                            </span>
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
}