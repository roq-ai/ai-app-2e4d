import * as yup from 'yup';

export const permissionValidationSchema = yup.object().shape({
  permission_description: yup.string().nullable(),
});
