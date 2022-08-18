import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useRegister, useSession } from '../contexts/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';

const validationRules = {
  username: {
    required: true
  },
  password: {
    required: true
  }
};

export default function Register() {
  const navigate = useNavigate();
  const { loading, error, isAuthed } = useSession();
  const register = useRegister();
  const methods = useForm();
  const {
    handleSubmit,
    reset,
  } = methods;

  const handleRegister = useCallback(async ({ username, password }) => {
    const success = await register({username, password});

    if (success) {
      // we can't come back to login
      navigate('/', {replace: true});
    }
  }, [navigate, register]);

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-1/4 h-screen flex items-center">
        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit(handleRegister)}>
          {
            error ? (
              <p className="text-red-500">
                {error}
              </p>
            ) : null
          }
          <LabelInput
            label="username"
            type="text"
            defaultValue=""
            data-cy="username_input"
            placeholder="Gebruikersnaam"
            autoComplete="off"
            validation={validationRules.username} />

          <LabelInput
            label="password"
            type="password"
            defaultValue=""
            data-cy="password_input"
            placeholder="Wachtwoord"
            autoComplete="off"
            validation={validationRules.password} />

          <div className="flex flex-row justify-end">
          <Link to="/login" className='px-4 py-2 text-gray-400 text-sm' >Terug naar inloggen</Link>
            <button
              data-cy="submit_btn"
              type="submit"
              disabled={loading}
              className="disabled:opacity-50 text-white bg-gray-800 px-4 py-2 rounded-sm">
              Registreer
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}