import axios from 'axios';

export const sendContactMail = async (
  nome: string,
  email: string,
  message: string
) => {
  const data = {
    nome,
    email,
    message
  };

  try {
    return await axios.post('/api/email', data);
  } catch (error) {
    return error;
  }
};