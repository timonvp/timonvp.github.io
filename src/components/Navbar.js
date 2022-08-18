import { useLogout } from "../contexts/AuthProvider";


export default function Navbar() {
    const logout = useLogout()

    return (<div className="bg-gray-800 p-4 fixed w-full flex items-center text-white">
        <div className="flex items-center"><img src="/recipe.png" className="w-12 mx-4" />Recepten App</div>
        <div className="flex ml-auto">
            <div className="ml-auto mr-6 cursor-pointer" >Eigen Recepten</div>
            <div className="ml-auto mr-4 cursor-pointer" >Andere Recepten</div>
            <div className="ml-auto mr-4 cursor-pointer" >Recept Toevoegen</div>
        </div>
        <div className="ml-auto mr-4 cursor-pointer" onClick={logout} >Uitloggen</div>
    </div>);
}