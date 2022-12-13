import { Intro, Layout, LetsTalkSection, ServicesList } from '../../common';
// import { ServicesList } from '../Homepage/components';

const WebDesign = () => {
  return (
    <Layout>
      <Intro
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default WebDesign;
