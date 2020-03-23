// JWT Validation
import jwt from 'jsonwebtoken';
import { authSecret } from '../../config/auth';

// Services
import { getAllUsers as getUsers } from '../../utils/services/UsersServices';

// TODO: Remove later
import Users from '../models/user';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const [user, userError] = await getUsers(null, { email });

    if (!user) {
      return res.json(userError);
    }

    if (user.length > 0 && !(await user[0].checkPassword(password))) {
      return res.json({ error: 'Usuário ou Senha incorreta' });
    }

    if (user.length === 0)
      return res.json({ error: 'Usuário ou senha incorretos' });

    const { id, name, teacher } = user[0];

    return res.json({
      user: {
        id,
        name,
      },
      token: jwt.sign({ id, teacher, email }, authSecret, {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
