import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().min(3, {
    message: 'UserName must be at least 3 characters long',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long',
  }),
}).strict();

export type userType = z.infer<typeof UserSchema>;
