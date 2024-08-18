
import "./App.css";
import BurgerStack from "./components/BurgerStack";
import IngredientList from "./components/IngredientList";
import { useState } from "react";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (props) => {
    setStack([...stack, props]);
  };

  const removeFromBurger = (props) => {
    const newStack = stack.filter(
      (Ingredient) => Ingredient.name !== props.name
    );
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          Ingredients={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
