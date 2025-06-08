import React from 'react';
import './SchoolCard.css';
import cardImage from "../../assets/explore9.jpg"

function SchoolCard({ footerText }) {
  return (
    <div className="school-card position-relative overflow-hidden">
      <img
        src={cardImage}
        className="card-img"
        alt="School"
      />
      
 <div className="card-footer-overlay">
  <p className="footer-text">{footerText}</p>
  <button className="explore-btn">
    Explore Now <span className="arrow">→</span>
  </button>
</div>
</div>
  );
}

export default SchoolCard;
