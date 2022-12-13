import { Intro, Layout, LetsTalkSection } from '../../common';
import { ServicesList } from '../Homepage/components';

const GraphicDesign = () => {
  return (
    <Layout>
      <Intro
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default GraphicDesign;
