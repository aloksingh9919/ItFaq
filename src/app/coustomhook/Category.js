
import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error, "error");
      });
  }, [url]);

  //   console.log(data,"andar se")
  return [data];
};

export default useFetch;
