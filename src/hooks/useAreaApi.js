import { useEffect, useState } from 'react';

export default function useAreasApi() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function areasApi() {
      let request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      request = await request.json();
      setAreas(request.meals);
      setLoading(true);
    }
    areasApi();
  }, []);

  return [areas, loading];
}
