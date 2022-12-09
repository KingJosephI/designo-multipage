import React from 'react';
import './Card.scss';

interface ICard {
  title?: string;
  description?: string;
  illustration?: string;
}

const Card: React.FC<ICard> = ({ title, description, illustration }: ICard) => {
  return (
    <article className="card">
      <img
        className="card__illustration"
        src={illustration}
        alt="Card illustration"
      />
      <div>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default Card;
