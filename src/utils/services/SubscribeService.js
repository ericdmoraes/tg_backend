import Subscribe from '../../app/models/subscribe';

/**
 *
 * @param {Object} data
 */
export const SubscribeStudentToSubject = async data => {
  try {
    console.log(typeof data);
    const res = await Subscribe.create(data);

    return [res, false];
  } catch (error) {
    console.log(error);
    return [false, error];
  }
};

export const listUserSubscribes = async id => {
  try {
    const res = await Subscribe.findAll({
      where: {
        student_id: id,
      },
    });

    return [res, false];
  } catch (error) {
    return [false, error];
  }
};
