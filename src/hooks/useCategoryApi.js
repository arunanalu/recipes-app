import { useEffect, useState } from 'react';

export default function useCategoryApi(url) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function categoryApi() {
      let result = await fetch(url);
      result = await result.json();
      setCategory(result);
      setLoading(true);
    }
    categoryApi();
  }, []);

  return [category, loading];
}
