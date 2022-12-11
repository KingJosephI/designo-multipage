import Service from '../../../../common/Service/Service';
import './ServicesList.scss';

const ServicesList = () => {
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
