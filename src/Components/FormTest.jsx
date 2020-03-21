import React from 'react'
import '../Styles-components/FormStyle.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import WatsonIcon from '../../images/watson-icon.svg'



export default function FormTest(props){
    return(
        <React.Fragment>
            <div className="container_form">
                <h1>Personality insights form</h1>
                <Form className="container_form-form">
                    <Form.Group controlId="formBasicName" className="form_group-container">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter full name" onChange = {(e) => props.handleInputs(e)} name="firstName" />
                    </Form.Group>
                    <Form.Group controlId="formBasicAge" className="form_group-container">
                        <Form.Label>What is your age?</Form.Label>
                        <Form.Control type="number" placeholder="Enter your age" name="age" onChange = {(e) => props.handleInputs(e)}/>
                    </Form.Group>
                    <InputGroup className="form_group-container">
                        <InputGroup.Prepend> 
                            <InputGroup.Text>Do you like to know what happening in faraway places? Why?</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="The answer must have more of 30 characters" onChange = {(e) => props.handleInputs(e)} name="firstQuestion"/>
                    </InputGroup>
                    <InputGroup className="form_group-container">
                        <InputGroup.Prepend> 
                            <InputGroup.Text>What place would you go to live an adventure? Why?</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="The answer must have more of 30 characters" onChange = {(e) => props.handleInputs(e)} name="secondQuestion"/>
                    </InputGroup>
                    <InputGroup className="form_group-container">
                        <InputGroup.Prepend> 
                            <InputGroup.Text>What is your favorite superhero? Why?</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" placeholder="The answer must have more of 30 characters" onChange = {(e) => props.handleInputs(e)} name="thirdQuestion"/>
                    </InputGroup>
                    
                    <div className="form_button"onClick={() => props.handleButtonWatson()} >
                        <img src={WatsonIcon} height={80} width={80} alt="Watson Logo"></img>
                    </div>
                </Form>
                
            </div>
        </React.Fragment>
    )
}