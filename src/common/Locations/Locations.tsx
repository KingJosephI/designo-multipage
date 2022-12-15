import { Link } from 'react-router-dom';
import ukIllustration from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import australiaIllustration from '../../assets/shared/desktop/illustration-australia.svg';
import canadaIllustration from '../../assets/shared/desktop/illustration-canada.svg';
import './Locations.scss';

const Locations = () => {
  return (
    <section className="locations">
      <article className="location">
        <img
          className="location__illustration"
          src={canadaIllustration}
          alt="location illustration"
        />
        <div className="location__content">
          <h2 className="location__title">CANADA</h2>
          <Link className="location__button" to="/location">
            See Location
          </Link>
        </div>
      </article>
      <article className="location">
        <img
          className="location__illustration"
          src={australiaIllustration}
          alt="location illustration"
        />
        <div className="location__content">
          <h2 className="location__title">AUSTRALIA</h2>
          <Link className="location__button" to="/location">
            See Location
          </Link>
        </div>
      </article>
      <article className="location">
        <img
          className="location__illustration"
          src={ukIllustration}
          alt="location illustration"
        />
        <div className="location__content">
          <h2 className="location__title">United KINGDOM</h2>
          <Link className="location__button" to="/location">
            See Location
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Locations;
