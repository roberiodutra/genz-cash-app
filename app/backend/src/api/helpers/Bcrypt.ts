import bcrypt from 'bcrypt';

class Bcrypt {
  public hashPass = (password: string) => {
    return bcrypt.hash(password, 8);
  };

  public comparePass = (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
  };
}

export default new Bcrypt();
