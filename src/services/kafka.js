import { Producer, KafkaClient } from 'kafka-node'

const kafkaHost = 'localhost:9092';

const client = new KafkaClient({kafkaHost});

export const ServiceProducer = new Producer(client);