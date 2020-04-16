import { createTest, getAllTests } from '../../utils/services/TestService';

class TestController {
  async store(req, res) {
    const [resTest, errTest] = await createTest(req.body);

    if (errTest) return res.json({ error: errTest });

    return res.json(resTest);
  }

  async index(req, res) {
    const { condition, fields } = req.body;

    const [tests, testsErr] = await getAllTests(condition, fields);

    if (!testsErr) return res.json(tests);
    return res.status(500).json(testsErr);
  }
}

export default new TestController();
