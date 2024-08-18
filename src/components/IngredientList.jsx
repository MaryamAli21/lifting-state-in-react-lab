const IngredientList = ({ Ingredients, addToBurger }) => {
    return (
      <>
        <ul>
          {Ingredients.map((Ingredient) => (
            <li
              key={Ingredient.name}
              style={{ backgroundColor: Ingredient.color }}
            >
              <p>{Ingredient.name}</p>
              <button onClick={() => addToBurger(Ingredient)}>+</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default IngredientList;