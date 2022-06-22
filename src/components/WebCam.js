import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";
import { addProfilePicture } from "../redux/action/profile.action";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: "40vw",
  height: "30vh",
  facingMode: "user",
};

export const WebcamCapture = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log("imgsrc =>", imageSrc);
    // console.log("imgUrl =>",URL.createObjectURL(imageSrc))
    setImage(imageSrc);
    fetch(imageSrc)
      .then((res) => 
        {
          // setImage(res.blob());
        })
      .then(console.log);
    //for setting the profile pic
    dispatch(addProfilePicture(imageSrc));

    props.setRetake(true);
    props.imageCallback(imageSrc);
  });
  const retake = () => {
    setImage("");
    props.setRetake(false);
  };

  useEffect(() => {
    props.webcomponent.capture = capture;
    props.webcomponent.retake = retake;
  }, []);

  return (
    <div className="webcam-container">
      <div className="webcam-img">
        {image == "" ? (
          <Webcam
            audio={false}
            // height={1000}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            // width={1000}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} />
        )}
      </div>

      {/* <div>
        {image != "" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setImage("");
            }}
            className="webcam-btn"
          >
            Retake Image
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="webcam-btn"
          >
            Capture
          </button>
        )}
      </div> */}
    </div>
  );
};
