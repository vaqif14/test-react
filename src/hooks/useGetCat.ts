import { useQuery } from "@tanstack/react-query";
import { http } from "../api/http";
import { ICatData } from "@/api/mock";

export const useGetCat = () =>
  useQuery<ICatData[]>({
    queryKey: ["cats"],
    queryFn: () => http.get("/cats").then((res) => res.data),
  });
