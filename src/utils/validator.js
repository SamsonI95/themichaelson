export const validateInquiry = ({ name, email, message }) => {
  if (!name || !email || !message) {
    return 'Required fields missing';
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return 'Invalid email';
  }

  return null;
};