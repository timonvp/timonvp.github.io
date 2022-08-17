import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useLogin, useSession } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const validationRules = {
  username: {
    required: true
  },
  password: {
    required: true
  }
};

export default function Login() {
  const navigate = useNavigate();
  const { loading, error, isAuthed } = useSession();
  const login = useLogin();
  const methods = useForm();
  const {
    handleSubmit,
    reset,
  } = methods;

  const handleLogin = useCallback(async ({ username, password }) => {
    const success = await login(username, password);

    if (success) {
      // we can't come back to login
      navigate('/', {replace: true});
    }
  }, [navigate, login]);

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-1/4">
        <h1>Sign in</h1>
        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit(handleLogin)}>
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
            <button
              data-cy="submit_btn"
              type="submit"
              disabled={loading}
              className="disabled:opacity-50">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}