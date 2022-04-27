import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { RefreshContext } from "../contexts/RefreshContext.js";

/**
 * useFetch is a custom hook exported function that allows you to re use the logic behind making a fetch from an api and preventing you from re writing code again and again.
 * @author Rasmus Rossetti
 * @param {string} url containing the URL thats being fetched
 * @returns the hooks states data, error, loading
 */

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { refresh } = useContext(RefreshContext);

  /**
   * useEffect is an arrow function that is a built in hook in react and is used to make a function be triggered once or several times and that is decided when the use effect contains an dependancy array wich contains a state, and is triggered when the state changes it re fetches the data.
   *@returns exports the hook variables
   */

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, refresh]);

  return { data, error, loading };
}
