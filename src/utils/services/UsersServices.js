// JWT Validation
import jwt from 'jsonwebtoken';
import { authSecret } from '../../config/auth';

// helpers
import passGen from '../helpers/PasswordHelper';
import { sendEmail } from '../helpers/EmailHelper';

// Model
import User from '../../app/models/user';

/**
 *
 * @param {Object} data
 */
export const saveNewUser = async ({ name, email, teacher }) => {
  try {
    const password = passGen();
    const userData = {
      name,
      email,
      teacher,
      password,
    };

    const userCreated = await User.create(userData);

    jwt.sign(
      { userCreated },
      authSecret,
      {
        expiresIn: '7d',
      },
      (err, token) => {
        if (!err) {
          const status = sendEmail(token, email, password);
          console.log(status);
        }
      }
    );

    return [true, false];
  } catch (error) {
    return [false, error];
  }
};

/**
 *
 * @param {Array<String>} fields
 * @param {Object} condition
 */
export const getAllUsers = async (fields, condition) => {
  try {
    const users = await User.findAll({
      attributes: fields,
      where: condition,
    });

    return [users, false];
  } catch (error) {
    return [false, error];
  }
};
