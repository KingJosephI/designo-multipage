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

const WebDesign = () => {
  const portfolio = [
    {
      id: 1,
      title: 'Express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      image: expressImage,
    },

    {
      id: 2,
      title: 'Transfer',
      description:
        'Site for low-cost money transfers and sending money within seconds',
      image: transferImage,
    },
    {
      id: 3,
      title: 'Builder',
      description:
        'Connects users with local contractors based on their location',
      image: builderImage,
    },

    {
      id: 4,
      title: 'Photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
      image: photonImage,
    },

    {
      id: 5,
      title: 'Blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
      image: blogrImage,
    },

    {
      id: 6,
      title: 'Camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
      image: campImage,
    },
  ];
  return (
    <Layout>
      <Intro
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <Portfolio data={portfolio} />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default WebDesign;
