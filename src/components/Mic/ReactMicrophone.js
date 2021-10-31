import React, { useRef, useEffect, useState, Component } from "react";
import { ReactMic } from 'react-mic';
import Button from "react-bootstrap/Button";

export class ReactMicrophone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);

  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#FFFFFF"
          backgroundColor="#000000" />
        <Button onClick={this.startRecording} id="recordButton" variant="outline-light" size="lg">
              Tell Us How You're Feeling (Start Recording)
            </Button>
        <Button id="stopButton" onClick={this.stopRecording} variant="outline-light" size="lg">
              Stop Recording
            </Button>
      </div>
    );
  }
}

export default ReactMicrophone;