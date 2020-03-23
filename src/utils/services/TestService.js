// Model
import Test from '../../app/models/test';

export const findTestById = async id => {
  try {
    const res = await Test.findAll({
      where: {
        id,
      },
    });

    return [res, false];
  } catch (error) {
    return [false, true];
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
