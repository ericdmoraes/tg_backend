// Model
import Test from '../../app/models/test';

export const t = () => {
  return null;
};

export const createTest = async data => {
  try {
    const testCreated = await Test.create(data);

    return [testCreated, false];
  } catch (error) {
    return [false, error];
  }
};
