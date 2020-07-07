// Services
import {
  getAllUsers as getUsers,
  saveNewUser,
} from '../../utils/services/UsersServices';

class UsersController {
  async index(req, res) {
    const { condition, fields } = req.body;
    const [users, usersError] = await getUsers(fields, condition);
    if (usersError) return res.status(500).json({ error: usersError });
    return res.json({ response: users });
  }

  async store(req, res) {
    const [createdUser, createdError] = await saveNewUser(req.body);
    if (createdError)
      return res.status(400).json(createdError.errors[0].message);
    return res.json(createdUser);
  }
}

export default new UsersController();
