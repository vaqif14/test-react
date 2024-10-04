import { FC } from "react";

interface ICard {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

const Card: FC<ICard> = ({ title, thumbnail, onClick }) => {
  return (
    <div className="shadow-md border-2 p-5 w-1/3" onClick={onClick}>
      <h3 className="text-center">{title}</h3>
      <img src={thumbnail} alt={title} width={250} loading="lazy" />
    </div>
  );
};

export default Card;
