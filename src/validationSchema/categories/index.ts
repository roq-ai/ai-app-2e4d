import * as yup from 'yup';

export const categoryValidationSchema = yup.object().shape({
  content_id: yup.string().nullable(),
});
