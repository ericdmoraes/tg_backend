// Models
import Subject from '../../app/models/subject';

export const getSubjects = async (condition = null, fields = null) => {
  try {
    const sub = await Subject.findAll({
      attributes: fields,
      where: condition,
    });

    return [sub, false];
  } catch (error) {
    return [false, error];
  }
};

export const createSubject = async data => {
  try {
    const subjectCreated = await Subject.create(data);

    return [subjectCreated, false];
  } catch (error) {
    return [false, error];
  }
};
