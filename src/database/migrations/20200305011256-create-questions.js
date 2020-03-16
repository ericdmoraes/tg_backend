module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      enunciated: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      options_number: {
        allowNull: false,
        type: Sequelize.ENUM('1', '2', '3', '4', '5'),
      },
      options_a: {
        type: Sequelize.STRING,
      },
      options_b: {
        type: Sequelize.STRING,
      },
      options_c: {
        type: Sequelize.STRING,
      },
      options_d: {
        type: Sequelize.STRING,
      },
      options_e: {
        type: Sequelize.STRING,
      },
      correct_option: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.dropTable('Questions');
  },
};
