import { useState, useEffect } from "react";
import { Url } from "../constants/urls";
import axios from "axios";

const useRequestData = (path, state) => {
  const [data, setData] = useState(state);

  const getData = () => {
    axios
      .get(`${Url}/${path}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [path]);

  return [data, getData];
};

export default useRequestData;
