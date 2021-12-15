import Recipe from './components/Recipe';
import RECIPE_DATA from './mock-data';

export default function App() {
  return (
    <div className='App bg-gray-900 py-px'>
      {RECIPE_DATA.map(v => <Recipe {...v} key={v.id} />)}
    </div>
  );
}
