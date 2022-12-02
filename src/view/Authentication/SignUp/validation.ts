import * as yup from 'yup';

import {
  requiredConstant,
  emailRegex,
  emailValidConstant,
} from '../../../common/utils/constants';

export const signUpSchema = yup.object().shape({
  name: yup.string().required(requiredConstant),
  password: yup.string().required(requiredConstant),
  email: yup
    .string()
    .email(emailValidConstant)
    .required(requiredConstant)
    .matches(emailRegex, emailValidConstant),
});
