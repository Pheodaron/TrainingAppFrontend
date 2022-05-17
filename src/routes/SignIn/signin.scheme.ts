import { InferType, object, string } from 'yup';

export const SignInScheme = object({
  username: string().min(3).trim().required().label('Username'),
  password: string().min(6).trim().required().label('Password'),
}).required();

export type SignInForm = InferType<typeof SignInScheme>;
