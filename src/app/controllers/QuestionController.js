// Services
import { createQuestion } from '../../utils/services/QuestionsServices';
import { findTestById } from '../../utils/services/TestService';

class QuestionController {
  async store(req, res) {
    const { test_id } = req.params;

    const [testRes, testErr] = await findTestById(test_id);

    if (!testErr) {
      const [questionRes, questionErr] = await createQuestion(
        req.body,
        testRes
      );
      if (!questionErr) return res.json(questionRes);
      return res.json(questionErr);
    }
    return res.json(testErr);
  }
}

// SEQUELIZE N:N 1:06:00

export default new QuestionController();
