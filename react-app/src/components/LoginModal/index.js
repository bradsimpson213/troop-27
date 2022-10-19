import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginModal.css';

const LoginModal = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/feed' />;
  }

  return (
    <form 
      onSubmit={ onLogin }
      className="login-modal-wrapper"
    >
      <div
        className="login-modal-errors"  
      >
        { errors.map((error, ind) => (
          <div key={ ind }>{ error }</div>
        )) }
      </div>
      <div 
        className='login-modal-inputs'
      >
        <label htmlFor='email'>Email:</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div
        className='login-modal-inputs'
      >
        <label htmlFor='password'>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <button 
        type='submit'
        className='login-modal-button'
      >
        Login
      </button>
    </form>
  );
};

export default LoginModal;
