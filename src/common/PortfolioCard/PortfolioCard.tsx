import React from 'react';
import './PortfolioCard.scss';

interface IPortfolioCard extends React.BaseHTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  description?: string;
}

const PortfolioCard = ({
  image = '',
  title = '',
  description = '',
  ...props
}: IPortfolioCard) => {
  return (
    <article className="portfolio-card" {...props}>
      <img
        className="portfolio-card__image"
        src={image}
        alt={`${title} illustration`}
      />
      <div className="portfolio-card__content">
        <h2 className="portfolio-card__title">{title}</h2>
        <p className="portfolio-card__description">{description}</p>
      </div>
    </article>
  );
};

export default PortfolioCard;
