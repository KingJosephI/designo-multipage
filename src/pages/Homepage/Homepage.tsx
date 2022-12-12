import { Layout, LetsTalkSection } from '../../common';
import { ServicesList, CardList, Hero } from './components';
import './Homepage.scss';

const Homepage = () => {
  return (
    <Layout>
      <main className="homepage">
        <Hero />
        <ServicesList />
        <CardList />
        <LetsTalkSection />
      </main>
    </Layout>
  );
};

export default Homepage;
