import {
  Intro,
  Layout,
  LetsTalkSection,
  ServicesList,
  Portfolio,
} from '../../common';

import expressImage from '../../assets/web-design/desktop/image-express.jpg';
import blogrImage from '../../assets/web-design/desktop/image-blogr.jpg';
import builderImage from '../../assets/web-design/desktop/image-builder.jpg';
import campImage from '../../assets/web-design/desktop/image-camp.jpg';
import photonImage from '../../assets/web-design/desktop/image-photon.jpg';
import transferImage from '../../assets/web-design/desktop/image-transfer.jpg';

import boxedWaterImage from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImage from '../../assets/graphic-design/desktop/image-science.jpg';
import changeImage from '../../assets/graphic-design/desktop/image-change.jpg';

const GraphicDesign = () => {
  const portfolio = [
    {
      id: 1,
      title: 'TIM BROWN',
      description:
        'A book cover designed for Tim Brown’s new release, ‘Change’',
      image: changeImage,
    },

    {
      id: 2,
      title: 'Boxed Water',
      description: 'A simple packaging concept made for Boxed Water',
      image: boxedWaterImage,
    },
    {
      id: 3,
      title: 'Science!',
      description:
        'A poster made in collaboration with the Federal Art Project',
      image: scienceImage,
    },
  ];
  return (
    <Layout>
      <Intro
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <Portfolio data={portfolio} />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default GraphicDesign;
