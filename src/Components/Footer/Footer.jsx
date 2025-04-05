import { Link } from "react-router-dom";
import { Assets } from "../../Assets/Assets";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={Assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            commodi amet quibusdam obcaecati accusamus odit voluptatibus cumque
            quas expedita praesentium! Sapiente dolor exercitationem architecto
            ullam! Odit quibusdam saepe possimus quos.
          </p>
          <div className="footer-social-icons">
            <Link
              to="https://www.facebook.com/tareq.salah.1614/"
              target="_blank"
            >
              <img src={Assets.facebook_icon} alt="" />
            </Link>
            <Link>
              <img src={Assets.twitter_icon} alt="" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/tareq-shareef-69b87a359/"
              target="_blank"
            >
              <img src={Assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <Link target="_blank" to="https://wa.me/qr/XMNIUALLAIE6P1">
                +963-934-898-234
              </Link>
            </li>
            <li>
              <Link target="_blank" to="mailto:tareq13101998@gmail.com">
                tareq13101998@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 &copy; Tomato.com - All Right Recerved
      </p>
    </div>
  );
}
