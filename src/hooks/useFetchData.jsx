import { useState, useEffect } from 'react';

const useFetchData = (data) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setFetchedData(data);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, [data]);

  return { fetchedData, loading };
};

export default useFetchData;
