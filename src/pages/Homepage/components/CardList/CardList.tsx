import { Card } from '../../../../common';
import friendlyIllustration from '../../../../assets/home/desktop/illustration-friendly.svg';
import passionateIllustration from '../../../../assets/home/desktop/illustration-passionate.svg';
import resourcefulIllustration from '../../../../assets/home/desktop/illustration-resourceful.svg';
import './CardList.scss';

const CardList = () => {
  return (
    <section className="card-list">
      <Card
        title="PASSIONATE"
        description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        illustration={passionateIllustration}
      />
      <Card
        title="RESOURCEFUL"
        description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        illustration={resourcefulIllustration}
      />
      <Card
        title="FRIENDLY"
        description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        illustration={friendlyIllustration}
      />
    </section>
  );
};

export default CardList;
