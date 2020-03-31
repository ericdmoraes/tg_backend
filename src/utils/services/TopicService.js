// Model
import Topic from '../../app/models/topic';

export const findTopicById = async id => {
  try {
    const res = await Topic.findByPk(id);

    return [res, false];
  } catch (error) {
    return [false, error];
  }
};

export const createTopic = async data => {
  try {
    const topicCreated = await Topic.create(data);

    return [topicCreated, false];
  } catch (error) {
    return [false, error];
  }
};
