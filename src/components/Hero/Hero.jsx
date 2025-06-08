import "./Hero.css";

export function Hero() {
  return (
    <div id="hero">
      <div className="hero-pause">
        <span className="bi bi-pause-fill"></span>
      </div>

      <div className="hero-text">
        <h1>
          <span>Welcome to </span> <br />
          <span>
            VIT-AP <span className="below-underline">University</span>
          </span>
        </h1>
        <p>APPLY KNOWLEDGE, IMPROVE LIFE</p>
        <button className="btn-contect">
          CONTECT US <span className="bi bi-arrow-right ms-3"></span>
        </button>
      </div>
    </div>
  );
}
