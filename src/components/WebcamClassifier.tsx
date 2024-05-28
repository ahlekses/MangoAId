import React, { useRef, useEffect, useState } from 'react';
import '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

interface WebcamClassifierProps {
  modelURL: string;
  metadataURL: string;
}

const WebcamClassifier: React.FC<WebcamClassifierProps> = ({ modelURL, metadataURL }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [label, setLabel] = useState<string>('');
  const [confidence, setConfidence] = useState<number>(0);

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Loading model...");
        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Failed to load the model:", error);
      }
    };

    loadModel();
  }, [modelURL, metadataURL]);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;

          videoRef.current.onloadeddata = () => {
            videoRef.current!.play().catch(error => {
              console.error("Failed to play the video:", error);
            });
          };
        }
      } catch (error) {
        console.error("Failed to set up the camera:", error);
      }
    };

    setupCamera();
  }, [videoRef]);

  const classifyVideo = async () => {
    if (model && videoRef.current) {
      try {
        const predictions = await model.predict(videoRef.current);
        console.log(predictions); // Log all predictions for debugging

        // Sort predictions by probability
        const sortedPredictions = predictions.sort((a, b) => b.probability - a.probability);
        setLabel(sortedPredictions[0].className);
        setConfidence(sortedPredictions[0].probability);

        requestAnimationFrame(classifyVideo); // Recursively call classifyVideo
      } catch (error) {
        console.error("Failed to classify the video:", error);
      }
    }
  };

  useEffect(() => {
    if (model) {
      classifyVideo(); // Start the classification loop when the model is loaded
    }
  }, [model]);

  return (
  
    <div className="video-container" id="AI">
      <video ref={videoRef} autoPlay muted />
      <h2 className="label">{label} ({(confidence * 100).toFixed(2)}%)</h2>
    </div>
  );
};

export default WebcamClassifier;
