// Services
import {
  getAllUsers as getUsers,
  saveNewUser,
} from '../../utils/services/UsersServices';

class UsersController {
  async index(req, res) {
    const { condition, fields } = req.body;
    console.log(req.decoded);
    const [users, usersError] = await getUsers(fields, condition);
    if (usersError) return res.status(500).json({ error: usersError });
    return res.json({ response: users });
  }

  async store(req, res) {
    const { data } = req.body;
    const [createdUser, createdError] = await saveNewUser(data);
    if (createdError)
      return res.status(500).json({ error: createdError.errors[0].message });
    return res.json({ response: createdUser });
  }
}

export default new UsersController();
