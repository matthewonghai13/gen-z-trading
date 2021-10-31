import React, { useRef, useEffect, useState, Component } from "react";
import { ReactMic } from "react-mic";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./reactMicrophone.scss";

export class ReactMicrophone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
    };
  }

  startRecording = () => {
    this.setState({
      record: true,
    });
  };

  stopRecording = () => {
    this.setState({
      record: false,
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  render() {
    return (
      <>
        <Row>
          <Col id="tellUs">Tell us how you're feeling.</Col>
        </Row>
        <Row>
          <Col className="buttonCol">
            <Button
              className="button"
              onClick={this.startRecording}
              id="recordButton"
              variant="outline-light"
              size="lg"
            >
              Start Recording
            </Button>
          </Col>
          <Col className="buttonCol">
            <Button
              className="button"
              id="stopButton"
              onClick={this.stopRecording}
              variant="outline-light"
              size="lg"
            >
              Stop Recording
            </Button>
          </Col>
        </Row>
        <Row>
          <div id="micContainer">
            <ReactMic
              record={this.state.record}
              onStop={this.onStop}
              onData={this.onData}
              strokeColor="#FFFFFF"
              backgroundColor="#000000"
            />
          </div>
        </Row>
      </>
    );
  }
}

export default ReactMicrophone;
