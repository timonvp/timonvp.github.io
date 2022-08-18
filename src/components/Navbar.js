import { useLogout } from "../contexts/AuthProvider";


export default function Navbar() {
    const logout = useLogout()

    return (<div className="bg-gray-800 p-4 fixed w-full flex items-center text-white">
        <img src="/recipe.png" className="w-12 ml-4" />
        <div className="ml-auto mr-4 cursor-pointer" onClick={logout} >Uitloggen</div>
    </div>);
}