import {
  Layout,
  Intro,
  LetsTalkSection,
  ServicesList,
  Portfolio,
} from '../../common';
import airfilterImage from '../../assets/app-design/desktop/image-airfilter.jpg';
import eyecamImage from '../../assets/app-design/desktop/image-eyecam.jpg';
import faceitImage from '../../assets/app-design/desktop/image-faceit.jpg';
import loopstudiosImage from '../../assets/app-design/desktop/image-loopstudios.jpg';
import todoImage from '../../assets/app-design/desktop/image-todo.jpg';
import { useEffect } from 'react';

// import { ServicesList } from '../Homepage/components';

const AppDesign = () => {
  const appDesignPortfolio = [
    {
      id: 1,
      title: 'Air Filter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
      image: airfilterImage,
    },

    {
      id: 2,
      title: 'Eyecam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
      image: eyecamImage,
    },
    {
      id: 3,
      title: 'Faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
      image: faceitImage,
    },
    {
      id: 4,
      title: 'Todo',
      description:
        'A todo app that features cloud sync with light and dark mode',
      image: todoImage,
    },
    {
      id: 5,
      title: 'Loopstudios',
      description: 'A VR experience app made for Loopstudios',
      image: loopstudiosImage,
    },
  ];
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <Intro
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <Portfolio data={appDesignPortfolio} />
      <ServicesList />
      <LetsTalkSection />
    </Layout>
  );
};

export default AppDesign;
