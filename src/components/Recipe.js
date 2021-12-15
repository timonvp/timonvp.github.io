export default function Recipe(props) {
    const {id, name} = props;
    return(<div>
        <h1>{name}</h1>
        <p>{id}</p>
    </div>);
}