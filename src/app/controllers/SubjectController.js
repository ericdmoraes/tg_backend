// Services
import { createSubject, getSubjects } from '../../utils/services/SubjecService';

class SubjectController {
  async store(req, res) {
    const { teacher, id: user_id } = req.decoded;
    const data = {
      name: req.body.name,
      description: req.body.description,
      user_id,
    };

    if (teacher) {
      const [createdSubject, errorCreated] = await createSubject(data);
      if (errorCreated) return res.status(500).json(errorCreated);
      return res.json(createdSubject);
    }
    return res.json(401).json({ error: 'You are not a teacher!' });
  }

  async index(req, res) {
    const { condition, fields } = req.body;

    const [sub, subErr] = await getSubjects(condition, fields);

    if (!subErr) return res.json(sub);
    return res.json(subErr);
  }
}

export default new SubjectController();
