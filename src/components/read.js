import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Read = () => {
   const navigate = useNavigate();
   const [APIData, setAPIData] = useState([]);
   useEffect(() => {
      axios
         .get(`https://64fd77e5596493f7af7e4343.mockapi.io/cgv-clone`)
         .then((response) => {
            setAPIData(response.data);
         });
   }, []);
   const setData = (data) => {
      let { id, firtName, lastName, checkbox } = data;
      localStorage.setItem("ID", id);
      localStorage.setItem("First Name", firtName);
      localStorage.setItem("Last Name", lastName);
      localStorage.setItem("Checkbox Value", checkbox);
   };
   return (
      <div>
         <button onClick={() => navigate("/")}>Back home</button>
         <Table singleLine>
            <Table.Header>
               <Table.Row>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Checked</Table.HeaderCell>
                  <Table.HeaderCell>Update</Table.HeaderCell>
               </Table.Row>
            </Table.Header>
            <Table.Body>
               {APIData.map((data) => {
                  return (
                     <Table.Row>
                        <Table.Cell>{data.firtName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>
                           {data.checkbox ? "Checked" : "Unchecked"}
                        </Table.Cell>
                        <Link to="/update">
                           <Table.Cell>
                              <button onClick={() => setData(data)}>
                                 Update
                              </button>
                           </Table.Cell>
                        </Link>
                     </Table.Row>
                  );
               })}
            </Table.Body>
         </Table>
      </div>
   );
};

export default Read;
