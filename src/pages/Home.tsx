import React, { useState } from "react";
import Card from "../components/card";
import Loader from "../components/loader";
import Preview from "../components/Preview";
import Renderif from "../components/renderif";
import { useCatAPI } from "../hooks/useGetCat";

import { ICatData } from "@/api/mock";
import { useKeyPress, useMemoizedFn, useUpdateEffect } from "ahooks";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const { catData, isLoading } = useCatAPI();
  const [cardData, setCardData] = useState<ICatData[]>(catData!);

  useKeyPress([27], () => {
    setImgUrl("");
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
          <Preview src={imgUrl} />
        </Renderif>
        <Renderif condition={isLoading}>
          <Loader />
        </Renderif>
        <Renderif condition={!!cardData && !isLoading}>
          {cardData?.map((item, index) => (
            <React.Fragment key={item.title}>
              <Card
                key={item.title}
                title={item.title}
                thumbnail={item.thumbnail}
                isLoading={isLoading}
                index={index}
                onClick={setImgUrl}
                onDrop={handleDrop}
              />
            </React.Fragment>
          ))}
        </Renderif>
      </div>
    </div>
  );
};

export default Home;
