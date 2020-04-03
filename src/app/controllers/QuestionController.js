// Services
import {
  createQuestion,
  getAllQuestions,
} from '../../utils/services/QuestionsServices';
import { findTestById } from '../../utils/services/TestService';
import { findTopicById } from '../../utils/services/TopicService';

class QuestionController {
  async store(req, res) {
    const { test_id, topic_id, questions } = req.body;

    const [testRes, testErr] = await findTestById(test_id);
    const [topicRes, topicErr] = await findTopicById(topic_id);

    if (!testErr && !topicErr) {
      const [questionRes, questionErr] = await createQuestion(
        questions,
        testRes,
        topicRes
      );

      if (!questionErr) return res.json(questionRes);
      return res.json(questionErr);
    }
    if (testErr) {
      return res.json(testErr);
    }
    return res.json(topicErr);
  }

  async index(req, res) {
    const { condition, fields } = req.body;

    const [questions, questionsErr] = await getAllQuestions(condition, fields);

    if (!questionsErr) return res.json(questions);
    return res.status(500).json(questionsErr);
  }
}

// SEQUELIZE N:N 1:06:00

export default new QuestionController();
