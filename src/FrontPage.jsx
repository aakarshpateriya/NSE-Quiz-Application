import React, { useState, useEffect, useRef } from 'react';
import './FrontPage.css';
import SixthGradeSubjectList from './SixthGradeSubjectList';
// import SeventhGradeSubjectList from './SeventhGradeSubjectList';
// import EighthGradeSubjectList from './EighthGradeSubjectList';

const FrontPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSixthGrade, setShowSixthGrade] = useState(false);
  // const [showSeventhGrade, setShowSeventhGrade] = useState(false);
  // const [showEighthGrade, setShowEighthGrade] = useState(false);

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Submitted Information:', { name, email, phone });
  };

  const handleClass6Click1 = () => {
    console.log('Class 6 Is Clicked');
    setShowSixthGrade(true);
    // setShowSeventhGrade(false);
    // setShowEighthGrade(false);
  };

  const handleClass7Click2 = () => {
    console.log('Class 7 Is Clicked');
    setShowSixthGrade(false);
    // setShowSeventhGrade(true);
    // setShowEighthGrade(false);
  };

  const handleClass8Click3 = () => {
    console.log('Class 8 Is Clicked');
    setShowSixthGrade(false);
    // setShowSeventhGrade(false);
    // setShowEighthGrade(true);
  };

  const whiteTextStyle = {
    color: 'white'
  };

  return (
    <div className="front-page">
      <header className="hero-section">
        <h1>Welcome to NFC Education</h1>
        <p className="tagline">Empowering Minds, Shaping Futures</p>
      </header>

      <div className="features-section">
        <h2 style={whiteTextStyle}>Why Choose NFC Education?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>Expert Faculty</h3>
            <p>Learn from industry professionals and experienced educators</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Modern Curriculum</h3>
            <p>Stay ahead with our up-to-date and relevant course content</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Interactive Learning</h3>
            <p>Engage in collaborative and hands-on learning experiences</p>
          </div>
        </div>
      </div>

      <div className="info-form">
        <h2>Start Your Journey Today</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              required
              placeholder="Enter your full name"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your.email@example.com"
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Your contact number"
            />
          </label>
          <button type="submit" className="submit-button">Begin Your Education Journey</button>
        </form>
        {submitted && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>Thank you for submitting your information! We'll contact you soon.</p>
          </div>
        )}
      </div>

      <div className="about-section">
        <h2 style={whiteTextStyle}>About NFC Education</h2>
        <p style={whiteTextStyle}>
          NFC Education is dedicated to providing top-notch educational resources for students of all levels. We offer interactive learning experiences tailored for each class, from foundational subjects to advanced topics.
        </p>
        <div className="stats-container">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expert Teachers</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      <div className="programs-section">
        <h2 style={whiteTextStyle}>Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Class 6</h3>
            <p>Comprehensive curriculum for 6th grade students</p>
            <button className="learn-more" onClick={handleClass6Click1}>
              Learn More
            </button>
          </div>
          <div className="program-card">
            <h3>Class 7</h3>
            <p>Complete syllabus for 7th grade students</p>
            <button className="learn-more" onClick={handleClass7Click2}>Learn More</button>
          </div>
          <div className="program-card">
            <h3>Class 8</h3>
            <p>Full curriculum for 8th grade students</p>
            <button className="learn-more" onClick={handleClass8Click3}>Learn More</button>
          </div>
        </div>
      </div>
      {showSixthGrade && <SixthGradeSubjectList />}
   {/* //   {showSeventhGrade && <SeventhGradeSubjectList />}
      {showEighthGrade && <EighthGradeSubjectList />} */}
    </div>
  );
};

export default FrontPage;