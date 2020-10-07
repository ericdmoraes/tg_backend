import Question from '../../app/models/question';

export const getAllQuestions = async (condition, fields, test) => {
  try {
    const t = await test.getQuestion();

    return [t, false];
  } catch (error) {
    return [false, error];
  }
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
};
