import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^.*(?=.*\d)(?=.*[A-Z]).*$/,
      'Password must be at least, one uppercase and one number'
    ),
});
