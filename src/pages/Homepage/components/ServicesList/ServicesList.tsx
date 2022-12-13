import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Service from '../../../../common/Service/Service';
import './ServicesList.scss';

const ServicesList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [className, setClassName] = useState('');

  // const { width } = screen;

  useEffect(() => {
    if (pathname !== '/') {
      setClassName('services');
    } else {
      setClassName('');
    }
    // if (width >= 1024) {
    //   setClassName('services');
    // } else {
    //   setClassName('');
    // }
  }, [pathname]);

  // style={{ display: `${innerWidth > 1024 ? 'flex' : ''}` }}
  return (
    <>
      {pathname === '/web-design' ? (
        <section className={className}>
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
      ) : pathname === '/app-design' ? (
        <section className={className}>
          <Service
            className="services-list__web"
            name="Web Design"
            onClick={() => navigate('/web-design')}
          />
          <Service
            className="services-list__graphic"
            name="Graphic Design"
            onClick={() => navigate('/graphic-design')}
          />
        </section>
      ) : pathname === '/graphic-design' ? (
        <section className={className}>
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
        </section>
      ) : pathname === '/' ? (
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
      ) : null}
    </>
    // <section className="services-list">
    //   {pathname === '/web-design' ? (
    //     <div className={className}>
    //       <Service
    //         className="services-list__app"
    //         name="App Design"
    //         onClick={() => navigate('/app-design')}
    //       />
    //       <Service
    //         className="services-list__graphic"
    //         name="Graphic Design"
    //         onClick={() => navigate('/graphic-design')}
    //       />
    //     </div>
    //   ) : pathname === '/app-design' ? (
    //     <div className={className}>
    //       <Service
    //         className="services-list__web"
    //         name="Web Design"
    //         onClick={() => navigate('/web-design')}
    //       />
    //       <Service
    //         className="services-list__graphic"
    //         name="Graphic Design"
    //         onClick={() => navigate('/graphic-design')}
    //       />
    //     </div>
    //   ) : pathname === '/graphic-design' ? (
    //     <div className={className}>
    //       <Service
    //         className="services-list__web"
    //         name="Web Design"
    //         onClick={() => navigate('/web-design')}
    //       />
    //       <Service
    //         className="services-list__app"
    //         name="App Design"
    //         onClick={() => navigate('/app-design')}
    //       />
    //     </div>
    //   ) : pathname === '/' ? (
    //     <>
    //       <Service
    //         className="services-list__web"
    //         name="Web Design"
    //         onClick={() => navigate('/web-design')}
    //       />
    //       <Service
    //         className="services-list__app"
    //         name="App Design"
    //         onClick={() => navigate('/app-design')}
    //       />
    //       <Service
    //         className="services-list__graphic"
    //         name="Graphic Design"
    //         onClick={() => navigate('/graphic-design')}
    //       />
    //     </>
    //   ) : null}

    //   {/*<section className="services-list">

    //    <Service
    //     className="services-list__web"
    //     name="Web Design"
    //     onClick={() => navigate('/web-design')}
    //   />
    //   <Service
    //     className="services-list__app"
    //     name="App Design"
    //     onClick={() => navigate('/app-design')}
    //   />
    //   <Service
    //     className="services-list__graphic"
    //     name="Graphic Design"
    //     onClick={() => navigate('/graphic-design')}
    //   />
    //   </section>
    //   */}
    // </section>
  );
};

export default ServicesList;
