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

export const createTest = async data => {
  try {
    const testCreated = await Test.create(data);

    return [testCreated, false];
  } catch (error) {
    return [false, error];
  }
};
