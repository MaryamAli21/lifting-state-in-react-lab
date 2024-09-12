import {useState} from 'react';
import './App.css';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);
  const [ingredients, setIngredients] = useState(availableIngredients);
  
  const addToBurger = (addedIngredient) => {
    setStack([...stack, addedIngredient]);
    setIngredients(ingredients.filter((ingredient) => ingredient.name !== addedIngredient.name));
  };

  const removeFromBurger = (removedIngredient) => {
    setIngredients([...ingredients, removedIngredient]);
    setStack(stack.filter((ingredient) => ingredient.name !== removedIngredient.name));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList name="AvailableIngredients" ingredients={ingredients} handleIngredient={addToBurger} />
        <IngredientList name="BurgerStack" ingredients={stack} handleIngredient={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;