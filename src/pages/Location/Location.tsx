import { Layout, LetsTalkSection } from '../../common';

const Location = () => {
  return (
    <Layout>
      <section>
        <div className="map"></div>
        <div>
          <h2>Canada</h2>
          <div>
            <p>
              <strong>Designo Central Office</strong>
              <address>
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5 <br />
              </address>
            </p>
            <p>
              <strong>Contact</strong> <br /> P :
              <a href="tel:+1 253-863-8967">+1 253-863-8967 </a> <br />M :
              <a href="http://contact@designo.co">contact@designo.co</a> <br />
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="map"></div>
        <div>
          <h2>Australia</h2>
          <div>
            <p>
              <strong>Designo AU Office</strong>
              <address>
                19 Balonne Street <br />
                New South Wales 2443 <br />
              </address>
            </p>
            <p>
              <strong>Contact</strong> <br /> P :
              <a href="tel:(02) 6720 9092">(02) 6720 9092</a> <br />M :
              <a href="http://contact@designo.co">contact@designo.au</a> <br />
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="map"></div>
        <div>
          <h2>United Kingdom</h2>
          <div>
            <p>
              <strong>Designo UK Office</strong>
              <address>
                13 Colorado Way <br />
                Rhyd-y-fro SA8 9GA <br />
              </address>
            </p>
            <p>
              <strong>Contact</strong> <br /> P :
              <a href="tel:078 3115 1400">078 3115 1400</a> <br />M :
              <a href="http://contact@designo.uk">contact@designo.uk</a> <br />
            </p>
          </div>
        </div>
      </section>
      <LetsTalkSection />
    </Layout>
  );
};

export default Location;
