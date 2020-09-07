import Subscribe from '../../app/models/subscribe';

export const SubscribeStudentToSubject = async data => {
  try {
    const res = await Subscribe.create(data);

    return [res, false];
  } catch (error) {
    console.log(error);
    return [false, error];
  }
};

export const t = () => {
  return null;
};
