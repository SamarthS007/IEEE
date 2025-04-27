import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About IEEE JSSATE-B</h2>
        <div className="about-content">
          <p>
            IEEE is the world's largest professional association advancing innovation and technological excellence for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly-cited publications, conferences, technology standards, and professional and educational activities.
          </p>
          <p>
            IEEE is the trusted "voice" for engineering, computing and technology information around the globe. We, IEEE JSSATE-B, belong to Region 10 of IEEE and under the Bangalore section.
          </p>
          <div className="branch-info">
            <strong>JSSATE-B Student Branch: STB98631</strong>
          </div>
        </div>

        <div className="sig-section">
          <h2 className="section-title">Special Interest Groups</h2>
          <div className="sig-container">
            <div className="sig-card">
              <h3>CompSoc</h3>
              <p>A conglomeration of students with a passion for Computer Science, Information Technology and Artificial Intelligence</p>
              <a href="/sigs/compsoc" className="learn-more">Learn More</a>
            </div>

            <div className="sig-card">
              <h3>Diode</h3>
              <p>A special interest group with a strong interest in the field of Electronics and Electrical Science</p>
              <a href="/sigs/diode" className="learn-more">Learn More</a>
            </div>

            <div className="sig-card">
              <h3>Piston</h3>
              <p>A team dedicated to the engineering applications of Mechanical, Automation, Civil, Chemical and Material Sciences</p>
              <a href="/sigs/piston" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 