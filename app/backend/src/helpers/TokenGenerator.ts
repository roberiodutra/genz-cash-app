import { sign, Secret, SignOptions } from 'jsonwebtoken';
import { IUser } from 'src/domain/interfaces/IUser';

const SECRET: Secret = process.env.SECRET || 'vnetod';

export default function tokenGenerator(payload: IUser) {
  const jwtConfig: SignOptions = {
    expiresIn: '24h',
    algorithm: 'HS256',
  };
  const token = sign(payload, SECRET, jwtConfig);
  return { token };
};
