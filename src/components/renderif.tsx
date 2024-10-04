import React, { FC } from "react";

interface IRenderIf {
  condition: boolean;
  children: React.ReactNode;
}

const Renderif: FC<IRenderIf> = ({ condition, children }) => {
  return condition && children;
};

export default Renderif;
