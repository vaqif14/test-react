import { useState } from "react";
import Card from "../components/card";
import Loader from "../components/loader";
import Preview from "../components/Preview";
import Renderif from "../components/renderif";
import { useCatAPI } from "../hooks/useGetCat";

import { ICatData } from "@/api/mock";
import { useKeyPress, useMemoizedFn, useUpdateEffect } from "ahooks";
import cn from "clsx";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const { catData, isLoading } = useCatAPI();
  const [cardData, setCardData] = useState<ICatData[]>(catData!);

  const handleClosePreview = useMemoizedFn(() => setImgUrl(""));

  useKeyPress([27], () => {
    handleClosePreview();
  });

  useUpdateEffect(() => {
    setCardData(catData!);
  }, [catData]);

  const handleDrop = useMemoizedFn((fromIndex: number, toIndex: number) => {
    const updatedData = [...cardData];
    const [movedCard] = updatedData.splice(fromIndex, 1);
    updatedData.splice(toIndex, 0, movedCard);
    setCardData(updatedData);
    localStorage.setItem("catData", JSON.stringify(updatedData));
  });

  return (
    <div className="flex">
      <div className="flex flex-row justify-center flex-wrap p-20">
        <Renderif condition={!!imgUrl}>
          <Preview src={imgUrl} onClose={handleClosePreview} />
        </Renderif>
        <Renderif condition={isLoading}>
          <Loader />
        </Renderif>
        <Renderif condition={!!cardData && !isLoading}>
          <div className="grid grid-cols-3 gap-6">
            {cardData?.map((item, index) => (
              <div
                key={item.title}
                className={cn({
                  ["col-span-1 md:col-span-1 lg:col-span-1"]: index > 3,
                })}
              >
                <Card
                  key={item.title}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  isLoading={isLoading}
                  index={index}
                  onClick={setImgUrl}
                  onDrop={handleDrop}
                />
              </div>
            ))}
          </div>
        </Renderif>
      </div>
    </div>
  );
};

export default Home;
