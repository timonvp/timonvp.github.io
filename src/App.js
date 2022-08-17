import { AuthProvider, useSession } from './contexts/AuthProvider';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

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
  const { session } = useSession();
  return (<Routes>
  <Route path={'/'} exact element={<Home />} />
  <Route path={'/login'} exact element={<Login />} />
</Routes>);
}