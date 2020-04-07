// JWT Validation
import jwt from 'jsonwebtoken';
import { authSecret } from '../../config/auth';

// Services
import { getAllUsers as getUsers } from '../../utils/services/UsersServices';

// TODO: Remove later
class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const [user, userError] = await getUsers(null, { email });

    if (!user) {
      return res.status(500).json(userError);
    }

    if (user.length > 0 && !(await user[0].checkPassword(password))) {
      return res.status(500).json({ error: 'Usuário ou Senha incorreta' });
    }

    if (user.length === 0)
      return res.status(500).json({ error: 'Usuário ou senha incorretos' });

    const { id, name, teacher } = user[0];

    return res.json({
      user: {
        id,
        name,
        email,
        teacher,
      },
      token: jwt.sign({ id, teacher, email, name }, authSecret, {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
