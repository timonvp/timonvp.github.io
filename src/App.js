import Recipe from './components/Recipe';
import RECIPE_DATA from './mock-data';

export default function App() {
  return (
    <div className='App grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
      {RECIPE_DATA.map(v => <Recipe {...v} key={v.id} />)}
    </div>
  );
}
