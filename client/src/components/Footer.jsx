import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "./Footer.css";

function Header() {
  return (
    <div id="footer-container">
      <div className="footer-links">
        <ul>
          <li className="footer-item">
            <a
              href="https://github.com/myfriendpaul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="image-link" src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/myfriendpaul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="image-link" src={linkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
