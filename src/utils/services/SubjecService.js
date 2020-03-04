// Models
import Subject from '../../app/models/subject';

export const t = () => {
  return null;
};

export const createSubject = async data => {
  try {
    const subjectCreated = await Subject.create(data);

    return [subjectCreated, false];
  } catch (error) {
    return [false, error];
  }
};
