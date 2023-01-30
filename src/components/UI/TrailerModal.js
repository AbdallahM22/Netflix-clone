import classes from "./TrailerModal.module.css";
import ReactDOM from "react-dom";
import { Fragment, useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { AiOutlineClose } from 'react-icons/ai'
const Backdrop = (props) => {
  return <div className={classes.overlay} onClick={props.onClose}></div>;
};

const Video = (props) => {
  const [videoURL, setVideoURL] = useState("");
  const [loading, setLoading] = useState(true);
   
  const handleSearch = useCallback(() => {
    movieTrailer(props.title).then((res) => {
      setVideoURL(res);
      setLoading(false);
    });
  }, [props.title]);
  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <div className={classes.video}>
      {loading && <p className={classes.text}>...Loading</p>}
      {videoURL && <ReactPlayer url={videoURL} controls={true} width='320px' style={{width: '500px'}}/>}
      {!videoURL && !loading && (<p className={classes.text}>No movie trailer found</p>)}
      <AiOutlineClose className={classes.icon} onClick={props.onClose}/>
    </div>
  );
};

const TrailerModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Video title={props.title} onClose={props.onClose}/>,
        document.getElementById("trailer-root")
      )}
    </Fragment>
  );
};

export default TrailerModal;
