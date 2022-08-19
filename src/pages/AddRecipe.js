import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import Textarea from '../components/TextArea';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiPrefix, axios } from "../api";

const validationRules = {
  username: {
    required: true
  },
  password: {
    required: true
  }
};

export default function AddRecipe() {
  const navigate = useNavigate();
  const methods = useForm();
  const {
    handleSubmit,
  } = methods;

  const handleAddRecipe = useCallback(async ({ name, people, duration, preparation, ingredients='[]' }) => {
    const {data : {data : newRecipe}} = await axios.post(`${apiPrefix}/recipes`, {name, people, duration, preparation, ingredients});

    if (newRecipe) {
      // we can't come back to login
      console.log(newRecipe);
      navigate(`/recipe/${newRecipe.id}`, {replace: true});
    }
  }, [navigate]);
  return (<>
    <Navbar />
    <FormProvider {...methods}>
      <div className="mx-auto w-1/4 h-screen flex items-center">
        <form className="grid grid-cols-1 gap-y-4" onSubmit={handleSubmit(handleAddRecipe)}>
          <LabelInput
            className="w-96 p-2"
            label="name"
            type="text"
            defaultValue=""
            data-cy="username_input"
            placeholder="Titel"
            autoComplete="off"
            validation={validationRules.username} />
        <LabelInput
                className="w-96 p-2"
                label="people"
                type="number"
                defaultValue=""
                data-cy="username_input"
                placeholder="Personen"
                autoComplete="off"
                min='1'
                max='99' />
            <LabelInput
                className="w-96 p-2"
                label="duration"
                type="number"
                defaultValue=""
                data-cy="username_input"
                placeholder="Tijdsduur"
                autoComplete="off"
                min='1'
                max='999' />
            <Textarea
                className='p-2 w-96 h-32 resize-none'
                placeholder='Bereidingswijze'
                label='preparation' />
          <div className="flex flex-row justify-end">
            <button
              data-cy="submit_btn"
              type="submit"
              className="disabled:opacity-50 text-white bg-gray-800 px-4 py-2 rounded-sm">
              Voeg toe
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  </>
    
  );
}