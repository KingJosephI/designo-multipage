import { Layout, LetsTalkSection } from '../../common';
import { ServicesList, CardList } from './components';
import './Homepage.scss';

const Homepage = () => {
  return (
    <Layout>
      <main className="homepage">
        <ServicesList />
        <CardList />
        <LetsTalkSection />
      </main>
    </Layout>
  );
};

export default Homepage;
