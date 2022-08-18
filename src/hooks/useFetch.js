import { axios } from '../api';
import {useState, useEffect, useCallback} from 'react';

export function useFetch(uri) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = useCallback(async (uri) => {
    try {
      setError();
      setLoading(true);
      const {data} = await axios.get(uri);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchData(uri);
  }, [uri, fetchData]);

  return {loading, data, error};
}