// Services
import { createTopic, getAllTopics } from '../../utils/services/TopicService';

class TopicController {
  async store(req, res) {
    const [topicCreated, topicError] = await createTopic(req.body);
    if (topicError) return res.status(500).json(topicError);
    return res.json(topicCreated);
  }

  async index(req, res) {
    const { condition, fields } = req.body;

    const [topics, topicsErr] = await getAllTopics(condition, fields);

    if (!topicsErr) return res.json(topics);
    return res.status(500).json(topicsErr);
  }
}

export default new TopicController();
