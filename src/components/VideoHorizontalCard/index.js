import "./styles.css";


const VideoHorizontalCard = ({ title = "Video", url="https://www.youtube.com/embed/MRdpAk1FcJs", description="description" }) => {
  return (
    <div className="video-horizontal-card">
      <iframe title={url} src={url} frameborder="0" allowfullscreen></iframe>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>      
    </div>
  );
};

export default VideoHorizontalCard;
