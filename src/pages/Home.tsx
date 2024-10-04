import React from "react";
import Card from "../components/card";
import { useGetCat } from "../hooks/useGetCat";
import Renderif from "../components/renderif";
import Loader from "../components/loader";

const Home = () => {
  const { data, isLoading } = useGetCat();
  console.log({ data });

  return (
    <div className="flex">
      <div className="flex flex-row justify-center flex-wrap p-20">
        <Renderif condition={isLoading}>
          <Loader />
        </Renderif>
        <Renderif condition={!!data && !isLoading}>
          {data?.map((item) => (
            <React.Fragment key={item.title}>
              <Card thumbnail={item.thumbnail} title={item.title} onClick={() => {}} />
            </React.Fragment>
          ))}
        </Renderif>
      </div>
    </div>
  );
};

export default Home;
