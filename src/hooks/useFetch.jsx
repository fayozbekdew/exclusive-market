import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '1fa1b46905msh5af045c00f0968fp1d7b11jsndf3e67d2d71a',
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
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
