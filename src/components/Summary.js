import { Link } from 'react-router-dom';


export default function Summary(props) {
    const {id, name, people, duration} = props;
    return(<Link className='bg-gray-800 m-5 px-6 py-3 text-gray-200 cursor-pointer' to={`/recipe/${id}`} >
        <div className='flex pb-3 items-center'>
            <h1 className='text-center flex-grow text-lg'>{name}</h1>
            <div className='flex-none'>
                <p>Tijdsduur: {duration}min</p>
                <p>Personen: {people}</p>
            </div>
        </div>
    </Link>);
}