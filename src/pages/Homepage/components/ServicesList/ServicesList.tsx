import { useNavigate } from 'react-router-dom';
import Service from '../../../../common/Service/Service';
import './ServicesList.scss';

const ServicesList = () => {
  const navigate = useNavigate();
  return (
    <section className="services-list">
      <Service
        className="services-list__web"
        name="Web Design"
        onClick={() => navigate('/web-design')}
      />
      <Service
        className="services-list__app"
        name="App Design"
        onClick={() => navigate('/app-design')}
      />
      <Service
        className="services-list__graphic"
        name="Graphic Design"
        onClick={() => navigate('/graphic-design')}
      />
    </section>
  );
};

export default ServicesList;
