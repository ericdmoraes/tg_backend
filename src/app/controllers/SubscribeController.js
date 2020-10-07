// Services
import {
  SubscribeStudentToSubject,
  listUserSubscribes,
} from '../../utils/services/SubscribeService';

class SubscribeController {
  async store(req, res) {
    const { student_id, subject_id } = req.body;

    const [apiRes, errRes] = await SubscribeStudentToSubject({
      student_id,
      subject_id,
    });

    if (!errRes) {
      return res.json({ apiRes });
    }

    return res.json({ errRes });
  }

  async index(req, res) {
    const { student_id } = req.body;
    const [response, error] = await listUserSubscribes(student_id);

    if (!error) return res.json(response);

    return res.json(error);
  }
}

export default new SubscribeController();
