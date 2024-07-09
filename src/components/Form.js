import { Input } from './Input';
import { useForm, FormProvider } from 'react-hook-form';
import { GrMail } from 'react-icons/gr';
import {
  desc_validation,
  name_validation,
  email_validation,
} from '../utils/inputValidation';
export const Form = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className='container'
      >
        <div className='grid gap-5 md:grid-cols-2'>
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...desc_validation} className='md:col-span-2' />
        </div>
        <div className='mt-5'>
          <button
            onClick={onSubmit}
            className='flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800'
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
