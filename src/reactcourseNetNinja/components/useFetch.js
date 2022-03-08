import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //   exp to simulate a loading time, we use setTimeout but in areal word scenario, we shouldn't do it
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          //   console.log(res)
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })

        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;