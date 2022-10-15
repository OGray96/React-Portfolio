import React, { useState }  from 'react';
import '../styles/contact.css'

import validateEmail from '../../utils/emailValidation.js';


function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!userMessage) {
      setErrorMessage(
        `Oops looks like you forgot to write a message!`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setUserMessage('');
    setEmail('');
  };

  return (
    <div>
      <h3>Contact me with the form below!</h3>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          className = 'email'
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className='user-name'
        />
        <textarea
          value={userMessage}
          name="textarea"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Write your message here!"
          className='text-area'
        />
        <button 
          type="button" 
          onClick={handleFormSubmit}
          className='button'>
            Submit
          </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;


























// export default function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3 email" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3 user-name" controlId="formBasicText">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter name" />
//       </Form.Group>
//       <Form.Group className="mb-3 text-area" controlId="formBasicText">
//         <Form.Label>Message</Form.Label>
//         <Form.Control as ='textarea'className ='text' label="Check me out" />
//       </Form.Group>
//       <Button className = 'button' variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }