import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="social-icon-group">
        <a href="https://www.linkedin.com/in/sohamgurjar239/"><FaTwitterSquare className="social-icon" /></a>
        <a href="https://www.linkedin.com/in/sohamgurjar239/"><FaFacebookSquare className="social-icon" /></a>
        <a href="https://instagram.com/soham_23?igshid=YmMyMTA2M2Y="><FaInstagramSquare className="social-icon" /></a>
        <a href="https://github.com/soham239"><FaGithubSquare className="social-icon" /></a>
      </div>
    </div>
  );
}

export default Footer;
