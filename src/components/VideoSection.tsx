const VideoSection = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <video 
          className="w-full h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video-home-2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;