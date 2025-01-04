import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: format.combine(
    format.timestamp(),
    format.json() // Log in JSON format
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/app.log" }), // Optional file logging
  ],
});

export default logger;
