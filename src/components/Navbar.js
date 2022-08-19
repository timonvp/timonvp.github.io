import { useLogout } from "../contexts/AuthProvider";
import { Link } from 'react-router-dom';


export default function Navbar() {
    const logout = useLogout()

    return (<div className="bg-gray-800 p-4 fixed w-full flex items-center text-white">
        <Link className="flex items-center" to='/' ><img src="/recipe.png" className="w-12 mx-4" />Recepten App</Link>
        <div className="flex ml-auto">
            <Link className="ml-auto mr-6 cursor-pointer" to='/' >Eigen Recepten</Link>
            <Link className="ml-auto mr-6 cursor-pointer" to='/other' >Andere Recepten</Link>
            <Link className="ml-auto mr-6 cursor-pointer" to='/add' >Recept Toevoegen</Link>
        </div>
        <div className="ml-auto mr-4 cursor-pointer" onClick={logout} >Uitloggen</div>
    </div>);
}