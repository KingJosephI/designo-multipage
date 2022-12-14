import { useEffect } from 'react';
import { Layout, LetsTalkSection } from '../../common';

const Location = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <h1>Location</h1>
      <LetsTalkSection />
    </Layout>
  );
};

export default Location;
