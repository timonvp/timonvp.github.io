import Recipe from '../components/Recipe';
import { useFetch } from '../hooks/useFetch';
import Navbar from '../components/Navbar';

export default function Home() {
    const { data } = useFetch('http://localhost:9000/api/recipes');
    return (<>
        <Navbar />
        <div className='App grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-28'>
            {data.map(v => <Recipe {...v} key={v.id} />)}
        </div>
    </>);
}