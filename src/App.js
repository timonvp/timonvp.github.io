import Recipe from './components/Recipe';
import Login from './components/Login';
import { useFetch } from './hooks/useFetch';
import { AuthProvider } from './contexts/AuthProvider';

export default function App() {
  const { data } = useFetch('http://localhost:9000/api/recipes');
  return (
    <AuthProvider>
      <Login />
      <div className='App grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {data.map(v => <Recipe {...v} key={v.id} />)}
      </div>
    </AuthProvider>
  );
}
