import { AuthProvider, useSession } from './contexts/AuthProvider';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import OtherRecipes from './pages/OtherRecipes';
import Recipe from './pages/Recipe';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

function Router() {
  const { isAuthed } = useSession();
  return (<Routes>
    {isAuthed ? <>
      <Route path={'/'} exact element={<Home />} />
      <Route path={'/other'} exact element={<OtherRecipes />} />
      <Route path={'/recipe/:id'} exact element={<Recipe />} />
    </> : <>
    <Route path={'/login'} exact element={<Login />} />
    <Route path={'/register'} exact element={<Register />} />
    <Route path={'*'} element={<Navigate to='/login' />} />
    </>}
</Routes>);
}