const Ingredient = (props) => {
    const {name, unit, amount} = props;
    return(<p>{amount} {unit} {name}</p>);
}

export default function Recipe(props) {
    const {name, ingredients, preparation, people, duration} = props;
    return(<div className='bg-gray-800 m-5 py-3 px-5 text-gray-200'>
        <h1 className='m-auto'>{name}</h1>
        {ingredients.map((v, i) => <Ingredient {...v} key={i} />)}
        <p>{preparation}</p>
        <p>Personen: {people}</p>
        <p>Tijdsduur: {duration}min</p>
    </div>);
}