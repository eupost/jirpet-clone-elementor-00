const VideoSection = () => {
  return (
    <section className="jirpet-section bg-white">
      <div className="jirpet-container">
        <div className="relative w-full max-w-6xl mx-auto">
          <video 
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video-home-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;