import { useFormContext } from 'react-hook-form';

const Textarea = ({ label, type, defaultValue, validation, ...rest }) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="col-span-6 sm:col-span-3 p-2">
      <textarea
        {...register(label, validation)}
        className="p-2 w-72"
        defaultValue={defaultValue}
        placeholder={label}
        type={type}
        id={label}
        name={label}
        {...rest}
      />
      {errors[label] && (
        <p data-cy="labelinput-error" className="text-red-500">
          {errors[label].message}
        </p>
      )}
    </div>
  );
};

export default Textarea;