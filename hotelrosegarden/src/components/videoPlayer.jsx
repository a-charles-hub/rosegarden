function VideoPlayer({ src, poster, width = "640", height = "360" }) {
  return (
    <video
      width={width}
      height={height}
      controls
      autoPlay
      muted
      loop
      poster={poster}
      style={{ borderRadius: "8px" }} // optional styling
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
