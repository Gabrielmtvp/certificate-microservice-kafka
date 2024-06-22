import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
  retry: {
    maxRetryTime: 30000,
  },
});

const consumer = kafka.consumer({ groupId: "kafka" });

export const run = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: "issue-certificate", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(
        "************************ Arrived in consumer **************************"
      );
      const obj = JSON.parse(message.value);
      console.log(obj);
    },
  });
};
