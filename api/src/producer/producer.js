import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

export const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "issue-certificate",
    messages: [{ value: JSON.stringify({ title: "Kafka NodeJS", rating: 5 }) }],
  });

  console.log("[SUCCESS] Message Sent!");
};
