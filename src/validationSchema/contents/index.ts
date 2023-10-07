import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable(),
});
