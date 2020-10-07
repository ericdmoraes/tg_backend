// Model
import Test from '../../app/models/test';

export const findTestById = async id => {
  try {
    const res = await Test.findByPk(id);

    return [res, false];
  } catch (error) {
    return [false, error];
  }
};

export const getAllTests = async (condition, fields) => {
  try {
    const tests = await Test.findAll({
      attributes: fields,
      where: condition,
    });

    return [tests, false];
  } catch (error) {
    return [false, error];
  }
};

export const createTest = async data => {
  try {
    console.log(typeof data);
    const testCreated = await Test.create(data);

    return [testCreated, false];
  } catch (error) {
    return [false, error];
  }
};
