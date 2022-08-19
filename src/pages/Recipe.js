import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';

const Ingredient = (props) => {
    const {name, unit, amount} = props;
    return(<p>{amount} {unit} {name}</p>);
}

export default function Recipe() {
    const params = useParams();
    const { data } = useFetch(`/recipes/${params.id}`);
    if (!data || data.length === 0) {return (<Navbar />);}
    console.log(data);
    const {name, ingredients, preparation, people, duration, username} = data;
    return(<>
        <Navbar />
        <div className='pt-24' >
            <div className='bg-gray-800 m-5 px-6 py-3 text-gray-200' >
                <div className='flex pb-3 items-center'>
                    <h1 className='text-center flex-grow text-lg'>{name}</h1>
                    <p className='mr-10 text-sm text-gray-400' >door {username}</p>
                    <div className='flex-none'>
                        <p>Tijdsduur: {duration}min</p>
                        <p>Personen: {people}</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='pr-8 text-sm min-w-max'>{ingredients.map((v, i) => <Ingredient {...v} key={i} />)}</div>
                    <p className='text-justify text-xs overflow-hidden'>{preparation}</p>
                </div>
            </div>
        </div>
    </>);
}