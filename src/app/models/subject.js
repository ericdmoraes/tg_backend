import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsToMany(models.Subject, {
      foreignKey: 'subject_id',
      through: 'Student_Has_Subject',
      as: 'user',
    });
  }
}
export default Subject;
