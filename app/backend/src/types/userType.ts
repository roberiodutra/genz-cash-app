import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().min(3, {
    message: 'FirstName must be at least 3 characters long',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
}).strict();

export type userType = z.infer<typeof UserSchema>;
