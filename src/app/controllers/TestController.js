import { createTest } from '../../utils/services/TestService';

class TestController {
  async store(req, res) {
    const [resTest, errTest] = await createTest(req.body);

    if (errTest) return res.json({ error: errTest });

    return res.json(resTest);
  }
}

export default new TestController();
