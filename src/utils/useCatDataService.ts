import { useLocalStorageState } from "ahooks";
import initialData from "../api/data.json" assert { type: "json" };
import { ICatData } from "@/api/mock";

export const useCatDataService = () => {
  const [catData, setCatData] = useLocalStorageState<ICatData[]>("catData", {
    defaultValue: initialData,
  });

  const getCatData = () => {
    return catData;
  };

  const addCatData = (newData: ICatData) => {
    const updatedData = [...(catData || []), newData];
    setCatData(updatedData);
  };

  return { catData, getCatData, addCatData };
};
