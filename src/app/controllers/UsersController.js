class UsersController {
  index(req, res) {
    return res.json({ controller: 'UserController.index' });
  }
}

export default new UsersController();
