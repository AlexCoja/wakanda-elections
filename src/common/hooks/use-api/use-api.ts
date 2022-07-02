import { useState } from "react";

export const useApi = <D = any>() => {
  const [data, setData] = useState<D>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | undefined>();

  return {
    data,
    error,
    loading,
    setData,
    setError,
    setLoading,
  };
};
