import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div>
        <img
          className="image"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="input">
        <input
          className="hero-input"
          type="text"
          placeholder="Search your verset "
        />
      </div>
    </div>
  );
}
export default Hero;