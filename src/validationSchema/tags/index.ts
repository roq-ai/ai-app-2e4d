import * as yup from 'yup';

export const tagValidationSchema = yup.object().shape({
  tag_description: yup.string().nullable(),
  category_id: yup.string().nullable(),
});
