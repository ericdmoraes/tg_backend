import Sequelize from 'sequelize';
import configDatabase from '../config/database';

// models
import User from '../app/models/user';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models.map(model => {
      return model.init(this.connection);
    });
  }
}

export default new Database();
