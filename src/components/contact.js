import ContactForm from './ContactForm';
import { Form } from './Form';
export function Contact() {
  return (
    <>
      <section className='' id='contact'>
        <div className='contact-info'>
          <h2>Contact</h2>

          {/* <div className='contact-form'> */}
          <Form />
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
