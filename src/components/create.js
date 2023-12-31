import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
   const navigate = useNavigate();
   const [firtName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [checkbox, setCheckbox] = useState(false);

   const postData = () => {
      axios.post(`https://64fd77e5596493f7af7e4343.mockapi.io/cgv-clone`, {
         firtName,
         lastName,
         checkbox,
      });
   };

   return (
      <div>
         <button onClick={() => navigate("/")}>Back home</button>
         <Form className="create-form">
            <Form.Field>
               <label>First Name</label>
               <input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </Form.Field>
            <Form.Field>
               <label>Last Name</label>
               <input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
               />
            </Form.Field>
            <Form.Field>
               <Checkbox
                  label="I agree to the Terms and Conditions"
                  onChange={() => {
                     setCheckbox(!checkbox);
                  }}
               />
            </Form.Field>
            <Button type="submit" onClick={postData}>
               Submit
            </Button>
         </Form>
      </div>
   );
}
