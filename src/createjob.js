import React,{useState} from "react";
import { Form, Button } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import { Addjob } from "./api";

function Create(p){
    let [jobPosition, setjobPosition] = useState("");
    let [description, setjobDescription] = useState("");
    let history = useHistory();

    let userData = {jobPosition, description};
    return(
        <>
        <h1>Create a Job</h1>
        <div class="container">
        <div class="row">
        <div class="col-sm-6">
        <form onSubmit = {async (e) => {
            e.preventDefault();
            console.log(userData);
            await Addjob(userData);
            history.goBack();
        }}>
        <Form.Group controlId="name">
          <Form.Label>Job Position</Form.Label>
          <Form.Control type="text" name="name" value={jobPosition} placeholder="Enter the position" 
          onChange={(e) => {
            setjobPosition(e.target.value);
        }} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={description} rows="5"  placeholder="Description"
          onChange={(e) => {
            setjobDescription(e.target.value);
        }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </form>
        </div>
        </div>
        </div>
        </>
    )
}
export default Create;