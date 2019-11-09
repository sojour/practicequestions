function mixPotions(arr) {
  let result = {
    volume: 0,
    ingredients: {}
  }

  //construction the result object
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    result.volume += current.volume;
    for (let ingredient in current.ingredients) {
      if (ingredient in result.ingredients) {
        result.ingredients[ingredient] += current.ingredients[ingredient] * current.volume;
      } else {
        result.ingredients[ingredient] = current.ingredients[ingredient] * current.volume;
      }
    }
  }

  //calculating concentration per ingredient
  for (const ingredient in result.ingredients) {
    result.ingredients[ingredient] = result.ingredients[ingredient] / result.volume;
  }

  return result
}

console.log(mixPotions([
  {
    volume: 100,
    ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }
  },
  {
    volume: 300,
    ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }
  },
]))
