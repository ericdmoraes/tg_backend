import Sequelize, { Model } from 'sequelize';

class Test extends Model {
  static init(sequelize) {
    super.init(
      {
        enunciated: Sequelize.INTEGER,
        options_number: Sequelize.ENUM('1', '2', '3', '4', '5'),
        options_a: Sequelize.STRING,
        options_b: Sequelize.STRING,
        options_c: Sequelize.STRING,
        options_d: Sequelize.STRING,
        options_e: Sequelize.STRING,
        correct_option: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, { foreignKey: 'subject_id' });
    this.belongsToMany(models.Test, {
      foreignKey: 'question_id',
      through: 'Test_Has_Questions',
      as: 'test',
    });
  }
}
export default Test;
