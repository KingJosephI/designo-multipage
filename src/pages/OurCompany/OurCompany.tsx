import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Layout, LetsTalkSection, Locations } from '../../common';
import aboutHeroImage from '../../assets/about/desktop/image-about-hero.jpg';
import aboutHeroImageMobile from '../../assets/about/mobile/image-about-hero.jpg';
import aboutHeroImageTablet from '../../assets/about/tablet/image-about-hero.jpg';
import realDealImage from '../../assets/about/desktop/image-real-deal.jpg';
import realDealImageMobile from '../../assets/about/mobile/image-real-deal.jpg';
import realDealImageTablet from '../../assets/about/tablet/image-real-deal.jpg';
import worldClassImage from '../../assets/about/desktop/image-world-class-talent.jpg';
import worldClassImageTablet from '../../assets/about/tablet/image-world-class-talent.jpg';
import worldClassImageMobile from '../../assets/about/mobile/image-world-class-talent.jpg';
import './OurCompany.scss';

const OurCompany = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Layout>
      <main className="container">
        <section className="about">
          <picture>
            <source media="(min-width:1024px)" srcSet={aboutHeroImage} />
            <source media="(min-width:700px)" srcSet={aboutHeroImageTablet} />
            <img
              className="about__image"
              src={aboutHeroImageMobile}
              alt="About illustration"
            />
          </picture>

          <div className="about__content">
            <h1 className="about__title">About</h1>
            <p className="about__description">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </section>
        <section className="world-class">
          <picture>
            <source media="(min-width:1024px)" srcSet={worldClassImage} />
            <source media="(min-width:700px)" srcSet={worldClassImageTablet} />
            <img
              className="world-class__image"
              src={worldClassImageMobile}
              alt="Woman standing in front of the door"
            />
          </picture>
          <div className="world-class__content">
            <h2 className="world-class__title">World-class talent</h2>
            <p className="world-class__description">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <br />
            <p className="world-class__description">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </section>
        <Locations />
        <section className="real-deal">
          <picture>
            <source media="(min-width:1024px)" srcSet={realDealImage} />
            <source media="(min-width:700px)" srcSet={realDealImageTablet} />
            <img
              className="real-deal__image"
              src={realDealImageMobile}
              alt="Real Deal illustration"
            />
          </picture>
          <div className="real-deal__content">
            <h2 className="real-deal__title">The real deal</h2>
            <p className="real-deal__description">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <br />
            <p className="real-deal__description">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </section>
      </main>

      <LetsTalkSection />
    </Layout>
  );
};

export default OurCompany;
