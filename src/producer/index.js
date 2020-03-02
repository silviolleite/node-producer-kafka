import { ServiceProducer } from "../services/kafka";
import { Log } from "../logs/index"

const payload = [{
    topic: 'Mytopic',
    messages: ['My message'],
    key: 'myKey',
    attributes: 2, // Compress using snappy
    timestamp: Date.now()
}];

const Close = () => {
    Log.info("Producer closed")
};

const Send = (err, data) => {
    Log.info("Sending topic");
    if (err != null) {
        Log.error("Error: " + err)
    }
    Object.entries(Object.keys(data)).forEach((key) => {
        Log.info("Topic published: " + key[1]);
    });
    ServiceProducer.close(Close)
};

const Ready = () => {
    Log.info("Producer is ready");
    ServiceProducer.send(payload, Send);
};

const Error = (err) => {
    Log.error("Error: " + err)
};


ServiceProducer.on('ready', Ready);

ServiceProducer.on('error', Error);
