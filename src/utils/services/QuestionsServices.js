import Question from '../../app/models/question';

export const t = () => {
  return null;
};

export const createQuestion = async data => {
  try {
    const res = await Question.bulkCreate(data);

    return [res, false];
  } catch (error) {
    return [false, error];
  }
};
