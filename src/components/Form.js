import { Input } from './Input';
import emailjs from '@emailjs/browser';
import { useForm, FormProvider } from 'react-hook-form';
import { useState, useRef } from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import {
  desc_validation,
  name_validation,
  email_validation,
} from '../utils/inputValidation';
export const Form = () => {
  const methods = useForm();
  const formRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const onSubmit = methods.handleSubmit((e) => {
    const templateParams = {
      from_name: e.name,
      from_email: e.email,
      message: e.description,
    };
    console.log(e);
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_ba3rdvd', // service id
        'template_xhzsd92', // template id
        formRef.current,
        {
          publicKey: 'Z62uCpJieU87vIBMd',
        } // publick key
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setTimeout(() => {
            setIsSubmitting(false);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          console.log(error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className='container w-[90%] sm:w-[600px]'
      >
        <div className='grid gap-10 md:grid-cols-2'>
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...desc_validation} className='md:col-span-2' />
        </div>
        <div className='mt-5'>
          {stateMessage && <p>{stateMessage}</p>}
          <button
            onClick={onSubmit}
            className='flex items-center gap-1 p-5 text-chalk-black bg-sea-foam hover:bg-blue-800'
            disabled={isSubmitting}
          >
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
