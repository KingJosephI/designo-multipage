import { NavLink } from 'react-router-dom';
import './LetsTalkSection.scss';

const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <div>
        <h2 className="lets-talk-section__title">
          Let’s talk about your project
        </h2>
        <p className="lets-talk-section__description">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <NavLink className="lets-talk-section__get-in-touch-button" to="/contact">
        Get In Touch
      </NavLink>
    </section>
  );
};

export default LetsTalkSection;
