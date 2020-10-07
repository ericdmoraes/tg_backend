module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Eric Moraes',
          email: 'professor@mail.com',
          // eric123
          password_hash:
            '$2b$08$YESKw1IzvSmyp2XvdoFR/ecaWoo00WfRu/kA.qbXt0F1y/rJ70QIS',
          teacher: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eric Moraes',
          email: 'aluno@mail.com',
          // eric123
          password_hash:
            '$2b$08$YESKw1IzvSmyp2XvdoFR/ecaWoo00WfRu/kA.qbXt0F1y/rJ70QIS',
          teacher: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
