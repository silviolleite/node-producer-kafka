import winston from "winston";

export const Log = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});