import Sequelize from 'sequelize';
import configDatabase from '../config/database';

// models
import User from '../app/models/user';
import Subject from '../app/models/subject';
import Topic from '../app/models/topic';
import Test from '../app/models/test';
import Question from '../app/models/question';
import Subscribe from '../app/models/subscribe';

const models = [User, Subject, Topic, Test, Question, Subscribe];

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
