import Question from '../../app/models/question';

export const t = () => {
  return null;
};

export const createQuestion = async (data, testModel, topicModel) => {
  try {
    const res = await Question.bulkCreate(data);

    res.map(async r => {
      await testModel.addQuestion(r);
      await topicModel.addQuestion(r);
    });

    return [res, false];
  } catch (error) {
    return [false, error];
  }
  // return [null, false];
};
