// Model
import User from '../../app/models/user';

export const t = () => {
  return 0;
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
