import Question from '../../app/models/question';

export const t = () => {
  return null;
};

export const createQuestion = async (data, testModel) => {
  console.log('data', data);
  console.log('data', testModel);
  try {
    const res = await Question.bulkCreate(data);

    console.log('res', res);
    const t = await testModel.addQuestion(res[0]);
    return [res, false];
  } catch (error) {
    return [false, error];
  }
};
