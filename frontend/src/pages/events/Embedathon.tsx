import './EventPage.css';

const Embedathon = () => {
  return (
    <div className="event-page">
      <div className="event-page-container">
        <h1 className="event-page-title">Welcome to Embedathon</h1>
        <div className="event-page-content">
          <p className="event-page-description">
            Embedathon is an exciting hackathon focused on embedded systems and IoT solutions. 
            Join us for a 24-hour coding marathon where you'll work on innovative projects in:
          </p>
          <ul className="event-page-features">
            <li>Embedded Systems Development</li>
            <li>IoT and Connected Devices</li>
            <li>Real-time Systems</li>
            <li>Hardware-Software Integration</li>
          </ul>
          <div className="event-page-details">
            <h2>Event Details</h2>
            <p><strong>Date:</strong> Coming Soon</p>
            <p><strong>Venue:</strong> IEEE JSSATE-B Innovation Hub</p>
            <p><strong>Duration:</strong> 24 Hours</p>
            <p><strong>Team Size:</strong> 2-4 members</p>
            <p><strong>Registration Fee:</strong> ₹1000 per team</p>
          </div>
          <button className="register-button">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Embedathon; 