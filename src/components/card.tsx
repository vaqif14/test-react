import { useDrag, useDrop } from "ahooks";
import cn from "clsx";
import { FC, useRef } from "react";
import Loader from "./loader";
import Renderif from "./renderif";

interface ICard {
  title: string;
  thumbnail: string;
  isLoading: boolean;
  index: number;
  onClick?: (url: string) => void;
  onDrop: (fromIndex: number, toIndex: number) => void;
}

const Card: FC<ICard> = ({ title, thumbnail, onClick, isLoading, index, onDrop }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useDrag({ index }, cardRef, {
    onDragStart: () => {
      console.log(`Dragging card: ${title}`);
    },
    onDragEnd: () => {
      console.log(`Finished dragging card: ${title}`);
    },
  });

  useDrop(cardRef, {
    onDom: (dropData) => {
      const fromIndex = dropData?.index;
      if (fromIndex !== undefined && fromIndex !== index) {
        onDrop(fromIndex, index);
      }
    },
  });

  return (
    <div ref={cardRef} className={cn("shadow-md border-2 p-5 w-1/3")} onClick={() => onClick?.(thumbnail)} draggable>
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
          "opacity-0": isLoading,
          "opacity-100": !isLoading,
        })}
      />
    </div>
  );
};

export default Card;
