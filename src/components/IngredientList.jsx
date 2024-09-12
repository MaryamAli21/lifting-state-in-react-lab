const IngredientList = ({ingredients, name, handleIngredient}) => {
  const deriveButton = () => {
      if(name.includes("AvailableIngredients")) {
          return '+'
      } else if (name.includes("BurgerStack")) {
          return '-'
      };
  };
  
  return(
      <ul>
          {ingredients.map((ingredient) => (
              <li style={{backgroundColor: ingredient.color}}>{ingredient.name}
                  <button onClick={() => {handleIngredient(ingredient)}}>{deriveButton()}</button>
              </li>
          ))}
      </ul>
  );
};

export default IngredientList;