import { FC } from "react";

interface IPreview {
  src: string;
}

const Preview: FC<IPreview> = ({ src }) => {
  return (
    <div className={"absolute top-0 left-0 z-50 backdrop-blur-3xl h-full w-full bg-no-repeat bg-cover p-5"}>
      <img src={src} alt="cat-preview" />
    </div>
  );
};

export default Preview;
