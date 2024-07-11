import { Form } from './Form';
import ContactForm from './ContactForm';
export function Contact() {
  return (
    <>
      <section className='' id='contact'>
        <div className='contact-info'>
          <h2>Contact</h2>
          <div className='w-[100%] flex justify-center'>
            {/* <ContactForm /> */}
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
