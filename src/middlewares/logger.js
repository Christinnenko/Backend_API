const logger = (request, response, next) => {
  const { API_URL, PORT } = process.env;
  console.log(`Request to ${API_URL}:${PORT}${request.originalUrl}`);
  next();
};

module.exports = logger;
