const Ingredient = (props) => {
    const {name, unit, amount} = props;
    return(<p>{amount} {unit} {name}</p>);
}

export default function Summary(props) {
    const {name, ingredients, preparation, people, duration} = props;
    return(<div className='bg-gray-800 m-5 px-6 py-3 text-gray-200 cursor-pointer'>
        <div className='flex pb-3 items-center'>
            <h1 className='text-center flex-grow text-lg'>{name}</h1>
            <div className='flex-none'>
                <p>Tijdsduur: {duration}min</p>
                <p>Personen: {people}</p>
            </div>
        </div>
        {/* <div className='flex'>
            <div className='pr-8 text-sm min-w-max'>{ingredients.map((v, i) => <Ingredient {...v} key={i} />)}</div>
            <p className='text-justify text-xs overflow-hidden'>{preparation}</p>
        </div> */}
    </div>);
}