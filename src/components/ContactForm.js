import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_ba3rdvd', // service id
        'template_xhzsd92', // template id
        // e.target,
        {
          publicKey: 'Z62uCpJieU87vIBMd',
        } // publick key
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail} className='container w-[90%] sm:w-[600px]'>
      <div className='grid gap-10 md:grid-cols-2'>
        <label className='form-label'>Name</label>
        <input type='text' name='user_name' />
        <label className='form-label'>Email</label>
        <input type='email' name='user_email' />
        <label className='form-label'>Message</label>
        <textarea name='message' className='md:col-span-2' />
      </div>

      <div className='submit-button'>
        <button type='submit' value='Send' disabled={isSubmitting}>
          Submit
        </button>
      </div>

      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;
