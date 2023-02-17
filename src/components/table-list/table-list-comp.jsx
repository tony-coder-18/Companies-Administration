import React from 'react';

export default function TableListComp({data}) {
    
    return (
        <div>
            <div className='table-head'>
               <span>Name</span>
               <span>E-mail</span>
               <span>Mobile Number</span>
               <span></span>
            </div>
            <div className='table-body'>
                {data.map((res, idx) => {
                    return (
                        <div>
                            <span>{res.name}</span>
                            <span>{res.email}</span>
                            <span>{res.mobileNumber}</span>
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

