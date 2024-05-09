import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
      };
      setIsPending(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setData(data);
        setIsPending(false);
      } catch (err) {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      }
    };
    getData();
  }, [url]);

  return { data, error, isPending };
};

export { useFetch };
