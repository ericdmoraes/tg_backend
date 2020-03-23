// Services
import { createSubject } from '../../utils/services/SubjecService';

class SubjectController {
  async store(req, res) {
    const { teacher, id: user_id } = req.decoded;
    const data = {
      name: req.body.name,
      description: req.body.description,
      user_id,
    };

    if (teacher) {
      try {
        const [createdSubject, errorCreated] = await createSubject(data);
        if (errorCreated) return res.status(500).json(errorCreated);

        return res.json(createdSubject);
      } catch (error) {
        return res.status(501).json(error);
      }
    }
    return res.json(401).json({ error: 'You are not a teacher!' });
  }
}

export default new SubjectController();
