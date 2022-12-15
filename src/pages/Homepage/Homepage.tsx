import { useEffect } from 'react';
import { Layout, LetsTalkSection } from '../../common';
import { ServicesList, CardList, Hero } from './components';
import './Homepage.scss';

const Homepage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
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
