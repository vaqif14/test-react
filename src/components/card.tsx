import { useMemoizedFn } from "ahooks";
import cn from "clsx";
import { FC } from "react";
import Loader from "./loader";
import Renderif from "./renderif";
interface ICard {
  title: string;
  thumbnail: string;
  isLoading: boolean;
  onClick: (url: string) => void;
}

const Card: FC<ICard> = ({ title, thumbnail, onClick, isLoading }) => {
  const onImgClick = useMemoizedFn(() => onClick(thumbnail));

  return (
    <div className="shadow-md border-2 p-5 w-1/3" onClick={onImgClick}>
      <h3 className="text-center">{title}</h3>
      <Renderif condition={isLoading}>
        <Loader />
      </Renderif>
      <img
        src={thumbnail}
        alt={title}
        width={250}
        loading="lazy"
        className={cn("object-cover transition-opacity duration-300", {
          ["opacity-0"]: isLoading,
          ["opacity-100"]: !isLoading,
        })}
      />
    </div>
  );
};

export default Card;
