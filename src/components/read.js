import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const Read = () => (
   <Table singleLine>
      <Table.Header>
         <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
         </Table.Row>
      </Table.Header>
      <Table.Body>
         <Table.Row>
            <Table.Cell>Nishant</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
         </Table.Row>
      </Table.Body>
   </Table>
);

export default Read;
