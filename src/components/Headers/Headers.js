import React from "react";
import { useForm } from "react-hook-form";
import "./Header.css";
import { GET_HEADER_FORM_FIELDS, FORM_VALUES } from "../../Scripts/FormData";
import FormCollection from "../FormCollection";
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";


const Headers = ({handleHeaderInputChange}) => {
 


  const FORM_FIELDS = GET_HEADER_FORM_FIELDS();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Header</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="d-flex align-items-center justify-content-around ">
         

          <FormCollection
            
            formCollectionData={FORM_FIELDS}
            onChange={handleHeaderInputChange}
          />
          
         
        </div>
      </CardBody>
    </Card>
  );
};

export default Headers;
