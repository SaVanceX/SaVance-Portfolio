import { Form } from './Form';
export function Contact() {
  return (
    <>
      <section className='' id='contact'>
        <div className='contact-info'>
          <h2>Contact</h2>
          <div className='w-[100%] flex justify-center'>
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}
