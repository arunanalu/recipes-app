export default async function fetchAreaFoods(area) {
  let result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  result = await result.json();
  return result;
}
