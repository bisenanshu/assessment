import React, { useState } from 'react';
import './Event.css';
import eventimg from '../../assets/event-img.jpg';

export function Events() {
  const [hoverBoxIndex, setHoverBoxIndex] = useState(null);

  const contents = [
    { id: 1, date: '19th Sept', text: 'VTAPP International \nTech Fest by VIT-AP' },
    { id: 2, date: '19th Sept', text: 'VTAPP International \nTech Fest by VIT-AP' },
    { id: 3, date: '19th Sept', text: 'VTAPP International \nTech Fest by VIT-AP' },
  ];

  return (
    <div className="event-bg">
      <p className="seeall">
        See all <span className="bi-arrow-right ms-2"></span>
      </p>

      <div className="event-top">
        <h1 className="event-heading">Our Events</h1>
        <p className="event-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur dolorem
          voluptates <br />
          aperiam quibusdam cumque ex, animi soluta consectetur adipisicing .
        </p>
      </div>

     
      <div className="event-container row justify-content-between g-2">
        {contents.map((content, idx) => (
          <div
            key={content.id}
            className="content col-12 col-sm-6 col-lg-4"
            style={{
              backgroundImage: `linear-gradient(rgba(59,63,70,0.2), rgba(55,57,62,0.8)), url(${eventimg})`,width:'395px'
            }}
          >
            <div className="text">
              {content.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div
              className="box"
              onMouseEnter={() => setHoverBoxIndex(idx)}
              onMouseLeave={() => setHoverBoxIndex(null)}
            >
              {hoverBoxIndex === idx ? (
                <span className="bi bi-arrow-right arrow-icon"></span>
              ) : (
                content.date
              )}
            </div>
          </div>
        ))}
      </div>

      {/* meet-container unchanged */}
      <div className="meet-container d-flex flex-wrap justify-content-between">
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="meet-content mb-4 col-12 col-md-6 col-lg-4 d-flex">
            <div className="meet-box">04 Apr</div>
            <div>
              <div className="meet-heading">CSI Meet'n Greet'23</div>
              <div className="meet-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reprehenderit
                consectetur adipisicing. Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
