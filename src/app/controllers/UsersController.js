// Services
import { getAllUsers } from '../../utils/services/UsersServices';

class UsersController {
  async index(req, res) {
    const { condition, fields } = req.body;
    const [users, usersError] = await getAllUsers(fields, condition);
    if (usersError) return res.status(500).json(usersError);
    return res.json(users);
  }
}

export default new UsersController();
