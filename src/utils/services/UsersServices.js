// Model
import User from '../../app/models/user';

/**
 *
 * @param {Object} data
 */
export const saveNewUser = async data => {
  try {
    const userCreated = await User.create(data);
    return [userCreated, false];
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
