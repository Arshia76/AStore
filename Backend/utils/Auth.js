import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);
    return hasedPassword;
  } catch (error) {
    return error;
  }
};

export const comparePassword = async (password, userPassword) => {
  try {
    const result = await bcrypt.compare(password, userPassword);
    return result;
  } catch (error) {
    return error;
  }
};

export const jwtSign = async (data) => {
  try {
    const token = await jwt.sign(data, process.env.jwtSecret, {
      expiresIn: 360000,
    });
    return token;
  } catch (error) {
    throw error;
  }
};

export const verifyJWT = (token, env) => {
  const data = jwt.verify(token, env);
  return data;
};
