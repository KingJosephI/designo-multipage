import React from 'react';
import './PortofioCard.scss';

interface IPortfolio extends React.BaseHTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  description?: string;
}

const PortofioCard = ({
  image = '',
  title = '',
  description = '',
  ...props
}: IPortfolio) => {
  return (
    <article className="portfolio" {...props}>
      <img
        className="portfolio__image"
        src={image}
        alt={`${title} illustration`}
      />
      <div className="portfolio__content">
        <h2 className="portfolio__title">{title}</h2>
        <p className="portfolio__description">{description}</p>
      </div>
    </article>
  );
};

export default PortofioCard;
