// Services
import { SubscribeStudentToSubject } from '../../utils/services/SubscribeService';

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
}

export default new SubscribeController();
