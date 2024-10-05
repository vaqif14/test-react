import { useQuery } from "@tanstack/react-query";
import { useCatDataService } from "../utils/useCatDataService";

export const useCatAPI = () => {
  const { getCatData } = useCatDataService();

  const { data: catData, isLoading } = useQuery({
    queryKey: ["cats"],
    queryFn: getCatData,
    initialData: [],
    refetchInterval: 5000,
  });

  return { catData, isLoading };
};
