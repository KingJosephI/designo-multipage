import { Layout } from '../../common';
import LetsTalkSection from '../../common/LetsTalkSection/LetsTalkSection';
import CardList from './components/CardList/CardList';

const Homepage = () => {
  return (
    <Layout>
      <CardList />
      <LetsTalkSection />
    </Layout>
  );
};

export default Homepage;
