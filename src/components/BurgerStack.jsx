// `src/components/BurgerStack.jsx`
const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <>
        <ul>
          {stack.map((Ingredient) => (
            <li
              key={Ingredient.name}
              style={{ backgroundColor: Ingredient.color }}
            >
              <p>{Ingredient.name}</p>
              <button onClick={() => removeFromBurger(Ingredient)}>x</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default BurgerStack;