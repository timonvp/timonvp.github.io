import Recipe from '../components/Recipe';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
    const { data } = useFetch('http://localhost:9000/api/recipes');
    return (<div className='App grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
    {data.map(v => <Recipe {...v} key={v.id} />)}
  </div>);
}