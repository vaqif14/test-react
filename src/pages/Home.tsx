import React, { useState } from "react";
import Card from "../components/card";
import { useGetCat } from "../hooks/useGetCat";
import Renderif from "../components/renderif";
import Loader from "../components/loader";
import Preview from "../components/Preview";

import { useKeyPress } from "ahooks";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const { data, isLoading } = useGetCat();

  useKeyPress([27], () => {
    setImgUrl("");
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
        <Renderif condition={!!data && !isLoading}>
          {data?.map((item) => (
            <React.Fragment key={item.title}>
              <Card thumbnail={item.thumbnail} title={item.title} onClick={setImgUrl} isLoading={isLoading} />
            </React.Fragment>
          ))}
        </Renderif>
      </div>
    </div>
  );
};

export default Home;
