import './EventPage.css';

const DiodeXcelerate = () => {
  return (
    <div className="event-page">
      <div className="event-page-container">
        <h1 className="event-page-title">Welcome to DiodeXcelerate</h1>
        <div className="event-page-content">
          <p className="event-page-description">
            DiodeXcelerate is a premier technical workshop focused on electronics and circuit design. 
            Join us for an immersive learning experience where you'll get hands-on practice with:
          </p>
          <ul className="event-page-features">
            <li>Circuit design and analysis</li>
            <li>PCB design and fabrication</li>
            <li>Electronic components and their applications</li>
            <li>Practical project implementation</li>
          </ul>
          <div className="event-page-details">
            <h2>Event Details</h2>
            <p><strong>Date:</strong> Coming Soon</p>
            <p><strong>Venue:</strong> IEEE JSSATE-B Lab</p>
            <p><strong>Duration:</strong> 2 Days</p>
            <p><strong>Registration Fee:</strong> ₹500</p>
          </div>
          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default DiodeXcelerate; 