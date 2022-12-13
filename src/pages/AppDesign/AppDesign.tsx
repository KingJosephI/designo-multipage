import { Layout, Intro, LetsTalkSection } from '../../common';
import { ServicesList } from '../Homepage/components';

const AppDesign = () => {
  return (
    <Layout>
      <Intro
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default AppDesign;
