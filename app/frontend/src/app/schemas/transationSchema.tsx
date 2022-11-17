import * as yup from 'yup';

export const transactionSchema = yup.object().shape({
  receiver: yup.string().required('Receiver is required'),
  value: yup
    .number()
    .required('Value is required')
    .min(1, 'Value must be at least 1.00'),
});
