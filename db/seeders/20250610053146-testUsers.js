'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'test1',
        password: 'test1',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test2',
        password: 'test2',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test3',
        password: 'test3',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test4',
        password: 'test4',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test5',
        password: 'test5',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test6',
        password: 'test6',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test7',
        password: 'test7',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test8',
        password: 'test8',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test9',
        password: 'test9',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test10',
        password: 'test10',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test11',
        password: 'test11',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test12',
        password: 'test12',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test13',
        password: 'test13',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test14',
        password: 'test14',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test15',
        password: 'test15',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test16',
        password: 'test16',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test17',
        password: 'test17',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test18',
        password: 'test18',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test19',
        password: 'test19',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test20',
        password: 'test20',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test21',
        password: 'test21',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test22',
        password: 'test22',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test23',
        password: 'test23',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test24',
        password: 'test24',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test25',
        password: 'test25',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test26',
        password: 'test26',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test27',
        password: 'test27',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test28',
        password: 'test28',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test29',
        password: 'test29',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test30',
        password: 'test30',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test31',
        password: 'test31',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test32',
        password: 'test32',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test33',
        password: 'test33',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test34',
        password: 'test34',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test35',
        password: 'test35',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test36',
        password: 'test36',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test37',
        password: 'test37',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test38',
        password: 'test38',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test39',
        password: 'test39',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test40',
        password: 'test40',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test41',
        password: 'test41',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test42',
        password: 'test42',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test43',
        password: 'test43',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test44',
        password: 'test44',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test45',
        password: 'test45',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test46',
        password: 'test46',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test47',
        password: 'test47',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test48',
        password: 'test48',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test49',
        password: 'test49',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test50',
        password: 'test50',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test51',
        password: 'test51',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test52',
        password: 'test52',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test53',
        password: 'test53',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test54',
        password: 'test54',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test55',
        password: 'test55',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test56',
        password: 'test56',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test57',
        password: 'test57',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test58',
        password: 'test58',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test59',
        password: 'test59',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test60',
        password: 'test60',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test61',
        password: 'test61',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test62',
        password: 'test62',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test63',
        password: 'test63',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test64',
        password: 'test64',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test65',
        password: 'test65',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test66',
        password: 'test66',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test67',
        password: 'test67',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test68',
        password: 'test68',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test69',
        password: 'test69',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test70',
        password: 'test70',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test71',
        password: 'test71',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test72',
        password: 'test72',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test73',
        password: 'test73',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test74',
        password: 'test74',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test75',
        password: 'test75',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test76',
        password: 'test76',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test77',
        password: 'test77',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test78',
        password: 'test78',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test79',
        password: 'test79',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test80',
        password: 'test80',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test81',
        password: 'test81',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test82',
        password: 'test82',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test83',
        password: 'test83',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test84',
        password: 'test84',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test85',
        password: 'test85',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test86',
        password: 'test86',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test87',
        password: 'test87',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test88',
        password: 'test88',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test89',
        password: 'test89',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test90',
        password: 'test90',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test91',
        password: 'test91',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test92',
        password: 'test92',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test93',
        password: 'test93',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test94',
        password: 'test94',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test95',
        password: 'test95',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test96',
        password: 'test96',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test97',
        password: 'test97',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test98',
        password: 'test98',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test99',
        password: 'test99',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'test100',
        password: 'test100',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'EMPLOYEE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'testAdmin',
        password: 'testAdmin',
        salary: (Math.floor(Math.random() * (9 - 5)) + 5) * 1000000,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
