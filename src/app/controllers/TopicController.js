// Services
import { createTopic } from '../../utils/services/TopicService';

class TopicController {
  async store(req, res) {
    const [topicCreated, topicError] = await createTopic(req.body);
    if (topicError) return res.status(500).json(topicError);
    return res.json(topicCreated);
  }
}

export default new TopicController();
