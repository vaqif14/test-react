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
    <div
      ref={cardRef}
      className={cn(
        "group max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl hover:border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white",
        "flex flex-col justify-between p-4 cursor-pointer"
      )}
      onClick={() => onClick?.(thumbnail)}
      draggable
    >
      <Renderif condition={isLoading}>
        <Loader />
      </Renderif>

      {!isLoading && (
        <>
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className={cn(
              "w-full h-48 object-cover rounded-lg transition-opacity",
              {
                "opacity-0": isLoading,
                "opacity-100": !isLoading,
              }
            )}
          />

          <h3 className="text-lg font-semibold mt-4 text-gray-800 dark:text-white text-center">
            {title}
          </h3>
        </>
      )}

      {/* Hover effect - Card content appears smoother */}
      <div
        className={cn(
          "absolute inset-0 bg-gray-900 bg-opacity-20 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        )}
      ></div>
    </div>
  );
};

export default Card;
