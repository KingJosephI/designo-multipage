import PortfolioCard from '../PortfolioCard/PortfolioCard';
import './Portfolio.scss';

interface IPortfolio extends React.BaseHTMLAttributes<HTMLDivElement> {
  data?: Array<any>;
}

const Portfolio = ({ data = [], ...props }: IPortfolio) => {
  return (
    <section className="portfolio" {...props}>
      {data?.map(({ title, description, image, id }) => (
        <PortfolioCard
          key={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </section>
  );
};

export default Portfolio;
