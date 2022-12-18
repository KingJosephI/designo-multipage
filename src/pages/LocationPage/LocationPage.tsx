import { useEffect } from 'react';
import { Layout, LetsTalkSection } from '../../common';
import MyMap from './MyMap';
import './LocationPage.scss';

const Location = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <main className="location-main">
        <section className="country-location">
          <div className="country-location__map">
            <MyMap />
          </div>
          <div className="country-location__content">
            <h2 className="country-location__title">Canada</h2>
            <div className="country-location__contact">
              <div>
                <strong className="country-location__office-name strong">
                  Designo Central Office
                </strong>
                <address className="country-location__office-address">
                  3886 Wellington Street <br />
                  Toronto, Ontario M9C 3J5 <br />
                </address>
              </div>
              <div className="country-location__office-address">
                <strong className="strong">Contact</strong> <br /> P :
                <a href="tel:+1 253-863-8967">+1 253-863-8967 </a> <br />M :
                <a href="http://contact@designo.co">contact@designo.co</a>{' '}
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="country-location">
          <div className="country-location__map">
            <MyMap />
          </div>
          <div className="country-location__content">
            <h2 className="country-location__title">Australia</h2>
            <div className="country-location__contact">
              <div>
                <strong className="country-location__office-name strong">
                  Designo AU Office
                </strong>
                <address className="country-location__office-address">
                  19 Balonne Street <br />
                  New South Wales 2443 <br />
                </address>
              </div>
              <div className="country-location__office-address">
                <strong className="strong">Contact</strong> <br /> P :
                <a href="tel:(02) 6720 9092">(02) 6720 9092</a> <br />M :
                <a href="http://contact@designo.co">contact@designo.au</a>{' '}
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="country-location">
          <div className="country-location__map">
            <MyMap />
          </div>
          <div className="country-location__content">
            <h2 className="country-location__title">United Kingdom</h2>
            <div className="country-location__contact">
              <div>
                <strong className="country-location__office-name">
                  Designo UK Office
                </strong>
                <address className="country-location__office-address">
                  13 Colorado Way <br />
                  Rhyd-y-fro SA8 9GA <br />
                </address>
              </div>
              <div className="country-location__office-address">
                <strong>Contact</strong> <br /> P :
                <a href="tel:078 3115 1400">078 3115 1400</a> <br />M :
                <a href="http://contact@designo.uk">contact@designo.uk</a>{' '}
                <br />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LetsTalkSection />
    </Layout>
  );
};

export default Location;
