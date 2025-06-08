import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import aboutimg from '../../assets/about_img.jpg';

export function About() {
  const targetCounts = {
    students: 11165,
    schools: 7,
    faculty: 343,
    publications: 1000,
  };

  const [counts, setCounts] = useState({
    students: 100,
    schools: 1,
    faculty: 100,
    publications: 100,
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const isInViewport = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const animateCount = (name, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const progressPercent = Math.min(progress / duration, 1);
        const value = Math.floor(progressPercent * (end - start) + start);
        setCounts((prev) => ({ ...prev, [name]: value }));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          setCounts((prev) => ({ ...prev, [name]: end }));
        }
      };
      window.requestAnimationFrame(step);
    };

    const onScroll = () => {
      if (!hasAnimated && isInViewport()) {
        setHasAnimated(true);
        animateCount('students', 100, targetCounts.students, 1500);
        animateCount('schools', 1, targetCounts.schools, 1500);
        animateCount('faculty', 100, targetCounts.faculty, 1500);
        animateCount('publications', 100, targetCounts.publications, 1500);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasAnimated]);

  return (
    <>
      <p className="view-more text-end">
        View More <span className="bi-arrow-right ms-2"></span>
      </p>

      <div ref={sectionRef} className="container about-ap">
        

        <div className="row">
          <div className="about-left col-12 col-lg-5 mb-4 mb-lg-0">
            <h1 className='about-text'>About VIT-AP</h1>
            <img src={aboutimg} alt="About VIT-AP" className="img-fluid" />
            <p style={{fontSize:'20px'}}>VIT-AP University is one of India's Best Top Emerging</p>

            <div className="my-5">
              <div className="number d-flex justify-content-between">
                <div className="number-item text-center">
                  <h2>{counts.students.toLocaleString()} <span className="bi bi-plus"></span></h2>
                  <p>Students</p>
                </div>
                <div className="number-item text-center">
                  <h2>{counts.schools}</h2>
                  <p>Schools</p>
                </div>
              </div>

              <div className="number d-flex justify-content-between mt-3">
                <div className="number-item text-center">
                  <h2>{counts.faculty.toLocaleString()} <span className="bi bi-plus"></span></h2>
                  <p>Faculty</p>
                </div>
                <div className="number-item text-center">
                  <h2>{counts.publications.toLocaleString()} <span className="bi bi-plus"></span></h2>
                  <p>Publications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right col-12 col-lg-5">
            <div className='unnoun'>OUR ANNOUNCEMENTS</div>
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <p className='right-para'>13TH SEP, 2023</p>
                <p className='right-deadline'>VITREE January 2024-Apply Now</p>
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
