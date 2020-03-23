import Sequelize, { Model } from 'sequelize';

class Test extends Model {
  static init(sequelize) {
    super.init(
      {
        questions_quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subject, { foreignKey: 'subject_id', as: 'subject' });
    this.belongsToMany(models.Question, {
      foreignKey: 'test_id',
      through: 'Test_Has_Questions',
      as: 'question',
    });
  }
}
export default Test;
