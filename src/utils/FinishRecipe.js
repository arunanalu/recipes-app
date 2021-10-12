function finishRecipe(history, localStorageObj) {
  const oldStore = JSON.parse(localStorage.getItem('doneRecipes'));
  const check = oldStore !== [] && oldStore
    .find((element) => element.name === localStorageObj.name);
  if (check === undefined) {
    const newStore = [...oldStore, localStorageObj];
    localStorage.setItem('doneRecipes', JSON.stringify(newStore));
  }
  history.push('/receitas-feitas');
}

export default finishRecipe;
