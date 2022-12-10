import Service from '../../../../common/Service/Service';
// import { useLocation } from 'react-router-dom';
import './ServicesList.scss';

const ServicesList = () => {
  // const { pathname } = useLocation();
  return (
    <section className="services-list">
      <Service className="services-list__web" name="Web Design" url="/" />
      <Service className="services-list__app" name="App Design" url="/" />
      <Service
        className="services-list__graphic"
        name="Graphic Design"
        url="/"
      />
    </section>
  );
};

export default ServicesList;
