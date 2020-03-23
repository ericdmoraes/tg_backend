export default async (req, res, next) => {
  const { teacher } = req.decoded;

  if (teacher) {
    return next();
  }
  return res.status(401).json({ error: 'your are not a teacher!' });
};
