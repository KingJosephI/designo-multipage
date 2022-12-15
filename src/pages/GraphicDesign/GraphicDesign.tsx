import {
  Intro,
  Layout,
  LetsTalkSection,
  ServicesList,
  Portfolio,
} from '../../common';

import boxedWaterImage from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImage from '../../assets/graphic-design/desktop/image-science.jpg';
import changeImage from '../../assets/graphic-design/desktop/image-change.jpg';
import { useEffect } from 'react';

const GraphicDesign = () => {
  const GraphicDesignPortfolio = [
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
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Intro
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <Portfolio data={GraphicDesignPortfolio} />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default GraphicDesign;
