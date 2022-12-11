import { Link } from 'react-router-dom';
import phoneImage from '../../../../assets/home/desktop/home-hero.svg';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__title">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="hero__description">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link className="hero__learn-more-button" to="/contact">
          Learn More
        </Link>
      </div>
      <img
        className="hero__image"
        src={phoneImage}
        alt="Smartphone frame illustration"
      />
    </section>
  );
};

export default Hero;
