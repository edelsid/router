import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    try {
      fetch(url).then(response => {
        if (!response.ok) {
          response.json().then(data => {
          console.log(data);
        })
      } else {
        response.json().then(data => {
        setData(data);
        });
      }});
    } catch (error) {
      console.log(error);
    }}, [url]);

  return { data };
}