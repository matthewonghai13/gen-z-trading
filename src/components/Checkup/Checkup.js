import React, { useRef, useEffect, useState } from "react";
import "./checkup.scss";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import * as faceapi from "face-api.js";

export default function Checkup() {
  const [initializing, setInitializing] = useState(false);
  const [camEnabled, setCamEnabled] = useState(false);
  const webcamRef = useRef();
  const canvasRef = useRef();
  const videoHeight = 480;
  const videoWidth = 640;

  useEffect(() => {
    if (camEnabled) {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);

      navigator.getUserMedia(
        {
          video: {},
        },
        (stream) => (webcamRef.current.srcObject = stream),
        (err) => console.log(err.name)
      );
    }
  }, [camEnabled]);

  const handleVideoOnPlay = async () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        webcamRef.current
      );
      const displaySize = {
        width: videoWidth,
        height: videoHeight,
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);

      const detections = await faceapi
        .detectAllFaces(
          webcamRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      // removed .withFaceLandmarks() above

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      // console.log(detections);
    }, 150);
  };

  return (
    <div>
      <span>
        {/* {initializing ? "Init" : "ready"} */}
        {camEnabled ? (
          <span>
            <div className="display-flex justify-content-center">
              <video
                ref={webcamRef}
                autoPlay
                muted
                height={videoHeight}
                width={videoWidth}
                onPlay={handleVideoOnPlay}
              />
              <canvas ref={canvasRef} className="position-absolute" />
            </div>
            <Button onClick={() => setCamEnabled(true)}>
              Tell Us How You're Feeling (Start Recording)
            </Button>
          </span>
        ) : (
          <div>
            <h1>How are you feeling today?</h1>
            <Button onClick={() => setCamEnabled(true)}>
              Help Us Help You
            </Button>
          </div>
        )}
      </span>
    </div>
  );
}
