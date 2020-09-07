import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        enunciated: Sequelize.INTEGER,
        options_number: Sequelize.ENUM('1', '2', '3', '4', '5'),
        options: Sequelize.ARRAY(Sequelize.TEXT),
        correct_option_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Test, {
      foreignKey: 'question_id',
      through: 'Test_Has_Questions',
      as: 'test',
    });

    this.belongsToMany(models.Topic, {
      foreignKey: 'question_id',
      through: 'Question_Has_Topic',
      as: 'topic',
    });
  }
}
export default Question;
