import { FastifyInstance } from "fastify";
import { readdir, stat } from "fs/promises";

type BaseConsumer = new (fastify: FastifyInstance) => void;

export class FastifyManager {
  constructor(private readonly fastify: FastifyInstance) {}

  async loadConsumers(dir: string) {
    const consumers = await readdir(dir);
    const promises = consumers.map(async (consumer) => {
      if (consumer === __filename) return;

      // Check if consumer is a dir
      const consumerPath = `${dir}/${consumer}`;
      const consumerStat = await stat(consumerPath);

      if (consumerStat.isDirectory()) {
        return this.loadConsumers(consumerPath);
      }

      const { default: Consumer } = (await import(consumerPath)) as {
        default: BaseConsumer;
      };
      new Consumer(this.fastify);
    });

    // await all routes to be loaded, so we can start the server
    await Promise.all(promises);
  }
}
