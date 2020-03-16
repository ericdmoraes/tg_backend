import Sequelize, { Model } from 'sequelize';

class Topic extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, { foreignKey: 'subject_id' });
  }
}
export default Topic;
