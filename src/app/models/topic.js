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
    this.belongsToMany(models.Question, {
      foreignKey: 'topic_id',
      through: 'Question_Has_Topic',
      as: 'question',
    });
  }
}
export default Topic;
