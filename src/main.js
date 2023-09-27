import Axios from 'axios';
import { throwIfMissing } from './utils.js';
import { config } from './config.js';

export default async (context) => {
  try {
    throwIfMissing(process.env, ['ENDPOINT', 'PROJECT_ID', 'API_KEY']);

    for (const queue of config.queues) {
      const queueSize = await getQueueSize(queue.name);
      context.log(
        `Queue "${queue.name}" has size ${queueSize} and expect to be max of ${queue.maxSize}.`
      );

      const isOkay =
        queueSize !== null &&
        queueSize !== undefined &&
        queueSize <= queue.maxSize;

      if (isOkay) {
        await Axios.get(queue.heartbeatUrl);
      }
    }

    return context.res.empty();
  } catch (err) {
    context.error(err.message);
    return context.res.send(err.message, 500);
  }
};

const getQueueSize = async (queueName) => {
  const response = await Axios.get(
    `${process.env.ENDPOINT}/health/queue/${queueName}`,
    {
      headers: {
        'X-Appwrite-Project': process.env.PROJECT_ID,
        'X-Appwrite-Key': process.env.API_KEY,
      },
    }
  );

  return response.data.size;
};
