module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      type: DataTypes.INT,
    },
    {}
  );
  User.associate = models => {
    // associations can be defined here
    console.log(models);
  };
  return User;
};
