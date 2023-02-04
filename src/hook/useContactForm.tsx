import React, { useState } from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    nome: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, handleChange };
};

export default useContactForm;