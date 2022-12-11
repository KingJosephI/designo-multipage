import React from 'react';
import './Card.scss';

interface ICard extends React.BaseHTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  illustration?: string;
}

const Card = ({
  title = '',
  description = '',
  illustration = '',
  ...props
}: ICard) => {
  return (
    <article className="card" {...props}>
      <img
        className="card__illustration"
        src={illustration}
        alt="Card illustration"
      />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default Card;
