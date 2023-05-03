import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Info() {
  return (
    <div className="info">
      <h3 className="info--name">Soham Gurjar</h3>
      <h4 className="info--role">Frontend Developer</h4>
      <h5 className="info--website"> Website Link </h5>

      <div className="info--button_group">
     
      <a href="mailto:sohamg@uchicago.edu" className = "link-button">
        <button className="info--email_button">
          <FaEnvelope className="email-icon" />
          <div className="email-text">Email</div>
        </button>
        </a>
        

        <a href="https://www.linkedin.com/in/sohamgurjar239/" className = "link-button">
        <button className="info--linkedin_button">
          <FaLinkedin className="linkedin-icon" />
          <div className="linkedin-text">LinkedIn</div>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Info;
