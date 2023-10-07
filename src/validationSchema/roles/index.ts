import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  role_descriptiong: yup.string().required(),
  role_description: yup.string().nullable().required(),
});
