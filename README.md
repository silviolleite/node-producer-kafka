Basic Nodejs Producer to write in an Apache Kafka stream
===================================================

It is a basic Nodejs producer to write in a [Apache Kafka](https://kafka.apache.org/) stream.

# Dependencies

### Node Packages

- [kafka-node](https://github.com/SOHU-Co/kafka-node) - Kafka-node is a Node.js client for Apache Kafka 0.9 and later
- [winston](https://github.com/winstonjs/winston) - A logger for just about everything

### Kafka

For this example you need to have an Apache Kafka running.

You can install the  `landoop/fast-data-dev`.
It is a Kafka distribution with Apache Kafka, Kafka Connect, Zookeeper, Confluent Schema Registry and REST Proxy. See below how to install it.

**Via docker command**
```shell script
docker pull landoop/fast-data-dev
```

Run
```shell script
docker run –rm -it -p 2181:2181 -p 3030:3030 -p 8081:8081 -p 8082:8082 -p 8083:8083 -p 9092:9092 -e ZK_PORT=2181 -e WEB_PORT=3030 -e REGISTRY_PORT=8081 -e REST_PORT=8082 -e CONNECT_PORT=8083 -e BROKER_PORT=9092 -e ADV_HOST=127.0.0.1 landoop/fast-data-dev
```

**Via Kitematic**

Go to `settings > General` and set the environment variables

|Variable name | Value|
|:------|:-----|
| ZK_PORT | 2181 |
| WEB_PORT | 3030 |
| REGISTRY_PORT | 8081 |
| REST_PORT | 8082 |
| CONNECT_PORT | 8083 |
| BROKER_PORT | 9092 |
| ADV_HOST | 127.0.0.1 |

Visit [http://127.0.0.1:3030](http://127.0.0.1:3030) to get into the `fast-data-dev` environment.

See more about [landoop/fast-data-dev](https://hub.docker.com/r/landoop/fast-data-dev) on this link.


# Run the producer

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run producer` to start the local server


## Application Structure

- `src/app.js` - The entry point to our application.
- `src/logs/` - This folder contains logs configuration.
- `src/producer/` - This folder contains the producer definitions.
- `src/services/` - This folder contains the kafka definitions for our producer.

Feedback
=====
I welcome your feedback!



