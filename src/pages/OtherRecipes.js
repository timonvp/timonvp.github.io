import Summary from '../components/Summary';
import { useFetch } from '../hooks/useFetch';
import Navbar from '../components/Navbar';

export default function OtherRecipes() {
    const { data } = useFetch('http://localhost:9000/api/recipes/other');
    return (<>
        <Navbar />
        <div className='App grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-28' >
            {data.map(v => <Summary {...v} key={v.id} />)}
        </div>
    </>);
}