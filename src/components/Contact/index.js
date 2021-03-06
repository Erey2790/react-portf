import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email:'', message: '' });
    const { name, email, message } = formState

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          } else {
              if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
              } else {
                  setErrorMessage('')
              }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

      }
      
      console.log(formState);
    return (
        
    <section>
        <h1>Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
              <label htmlFor='name'>Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
          </div>
          <div>
              <label htmlFor='email'>Email address:</label>
              <input type="email" defaultValue={email} onChange={handleChange} name="email" />
          </div>
          <div>
              <label htmlFor='message'>Message:</label>
              <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
          </div>
          <button type='submit'>submit</button>
        </form>
        <div>Phone number (214) 497-8357</div>
        <div>Email: Erey2790@gmail.com</div>
        
    </section>

   

    
    )
}

export default ContactForm;