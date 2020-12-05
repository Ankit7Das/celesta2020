import React, { Component } from "react";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import axios from 'axios';

class addEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizers:"",
      name:"",
      description:"",
      venue:"",
      date:"",
      startTime:"",
      endTime:"",
      teamSize:"",
      eventType:"event",
      rulebookUrl:"",
      charge:""
    };
  }

  componentDidMount = () => {}

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("/api/events/", {
        organizers:this.state.organizers,
        name:this.state.name,
        description:this.state.description,
        imageUrl:"",
        venue:this.state.venue,
        venueUrl:"",
        date:this.state.date,
        startTime:this.state.startTime,
        endTime:this.state.endTime,
        teamSize:this.state.teamSize,
        eventType:this.state.eventType,
        rulebookUrl:this.state.rulebookUrl,
        charge:this.state.charge
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })

      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      organizers:"",
      name:"",
      description:"",
      venue:"",
      date:"",
      startTime:"",
      endTime:"event",
      teamSize:"",
      eventType:"",
      rulebookUrl:"",
      charge:""
    })
  }

  render() {
    console.log("State: ",this.state);
    return (
      <div style={{ overflowX: "hidden" }}>
        <div>
          <ExamplesNavbar />
        </div>
        <div style={{ backgroundColor: "#05001e" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <Form
          style={{
            backgroundColor: "#05001e",
            padding: "30px",
            cursor: "pointer",
            color: "white",
          }}
          onSubmit={this.submit}
        >
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Name of event
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="name"
                id="exampleText"
                placeholder="Name"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          {/* <FormGroup row>
            <Label for="exampleText" sm={2}>
              Prices
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="text"
                id="exampleText"
                placeholder="Robowars"
              />
            </Col>
          </FormGroup> */}
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="description"
                id="exampleText"
                placeholder="Description"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          {/* <FormGroup row>
            <Label for="exampleText" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="date"
                id="exampleText"
                placeholder="Date"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup> */}
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Submission link
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="venue"
                id="exampleText"
                placeholder="Venue"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Event Type
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="eventType"
                id="exampleSelect"
                defaultValue="technical"
                onChange={this.handleChange}
                style={{ backgroundColor: "#05001e" }}
              >
                <option value="event">Event</option>
                <option value="gl">Guest Lecture</option>
                <option value="workshop">Workshop</option>
                <option value="hackathon">Hackathon</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Team Size
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="teamSize"
                id="exampleText"
                placeholder="Team Size"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Start Date
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="startTime"
                id="exampleText"
                placeholder="Start Time"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              End Date
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="endTime"
                id="exampleText"
                placeholder="End Time"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Charge
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="charge"
                id="exampleText"
                placeholder="Charge"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              RuleBook URL
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="rulebookUrl"
                id="exampleText"
                placeholder="Rulebook Url"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Organizers
            </Label>
            <Col sm={10}>
              <Input
                type="textArea"
                name="organizers"
                id="exampleText"
                placeholder="Organizers"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button
              type="submit"
              value="Submit"
              >Submit</Button>
            </Col>
          </FormGroup>
        </Form>
        <Footer />
      </div>
    );
  }
}

export default addEvent;
