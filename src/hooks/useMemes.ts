import { useEffect } from "react";
import { useFetch } from "./useFetch";

export const useMemes = () => {
  const { data, loading, error, handleFetch } = useFetch("");

  useEffect(() => {
    handleFetch();
  }, []);

  return { data: data?.data, loading, error, handleFetch };
};
