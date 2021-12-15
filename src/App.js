import Recipe from './components/Recipe';
import RECIPE_DATA from './mock-data';

export default function App() {
  return (
    <div className="App">
      {RECIPE_DATA.map(v => <Recipe id={v.id} name={v.name} />)}
    </div>
  );
}
