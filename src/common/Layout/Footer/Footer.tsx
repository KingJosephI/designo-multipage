import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaInstagram, FaPinterest } from 'react-icons/fa';
import footerLogo from '../../../assets/shared/desktop/logo-light.png';
import './Footer.scss';

interface IFooter extends React.BaseHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Footer = ({ ...props }: IFooter) => {
  return (
    <footer className="footer" {...props}>
      <div>
        <img className="footer__logo" src={footerLogo} alt="logo" />

        <ul className="footer__links">
          <li>
            <Link className="footer__link" to="/our-company">
              Our Company
            </Link>
          </li>
          <li>
            <Link className="footer__link" to="/location">
              Locations
            </Link>
          </li>
          <li>
            <Link className="footer__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__address">
        <h2> Designo Central Office</h2>
        3886 Wellington Street <br />
        Toronto, Ontario M9C 3J5 <br />
      </div>

      <div className="footer__contact">
        <h2>Contact Us (Central Office)</h2>P :
        <a href="tel:+1 253-863-8967">+1 253-863-8967</a>
        <br />M :<a href="mailto:contact@designo.co">contact@designo.co</a>
      </div>

      <div className="footer__social-media">
        <AiFillFacebook className="footer__social-icon" />
        <AiFillYoutube className="footer__social-icon" />
        <AiOutlineTwitter className="footer__social-icon" />
        <FaPinterest className="footer__social-icon" />
        <FaInstagram className="footer__social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
