// Services
import { createQuestion } from '../../utils/services/QuestionsServices';

class QuestionController {
  async store(req, res) {
    const [response, err] = await createQuestion(req.body);

    if (!err) return res.json(response);

    return res.json(err);
  }
}

export default new QuestionController();
