import Sequelize from 'sequelize';
import configDatabase from '../config/database';

// models
import User from '../app/models/user';
import Subject from '../app/models/subject';

const models = [User, Subject];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
