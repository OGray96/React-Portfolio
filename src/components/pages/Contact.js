import React, { useState }  from 'react';
import '../styles/contact.css'

import validateEmail from '../../utils/emailValidation.js';


function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!userName) {
      setErrorMessage('Oops looks like you forgot to write a name!');
      return;
    }
    if (!userMessage) {
      setErrorMessage(
        `Oops looks like you forgot to write a message!`
      );
      return;
    }
    alert(`Message submitted, thanks ${userName}! Oliver will be in contact soon!`);

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