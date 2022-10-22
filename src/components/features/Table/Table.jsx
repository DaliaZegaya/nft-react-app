import "./Table.css";
import React, { useState } from "react";
import MOCK_DATA from '../../../data/MOCK_DATA.json'
import TextField from '@mui/material/TextField';

function Table() {
    const [search, setSearch] = useState("")
    return (
        <div className="container mt-5">
            <TextField id="standard-basic" variant="standard" />
            <input type="text" placeholder="Search..." className="form-control search_input"
            onChange={(e)=>{setSearch(e.target.value)}}/>
            <table className="table table-bordered search_table">
                <thead className="thead-dark text-light">
                    <tr>
                        <th>Picture</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>
                    {MOCK_DATA.slice(0,30).filter((value)=>{
                        if (search === "") {
                            return value
                        }
                        else if (
                            value.first_name.toLowerCase().includes(search.toLowerCase()) ||
                            value.gender.toLowerCase().includes(search.toLowerCase()) ||
                            value.email.toLowerCase().includes(search.toLowerCase()) 
                            ) {
                            return value
                        } 
                    }).map(item => (
                        <tr key={item.id}>
                            <td><img src={item.picture} alt="" width={50} height={50} /> </td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Table;
