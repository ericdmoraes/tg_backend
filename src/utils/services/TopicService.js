// Model
import Topic from '../../app/models/topic';

export const t = () => {
  return null;
};

export const createTopic = async data => {
  try {
    const topicCreated = await Topic.create(data);

    return [topicCreated, false];
  } catch (error) {
    return [false, error];
  }
};
