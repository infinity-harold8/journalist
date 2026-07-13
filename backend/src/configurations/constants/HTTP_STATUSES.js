// HTTP
const HTTP_STATUS = {
  OK: {
    status: 200,
    message: "OK",
  },
  CREATED: {
    status: 201,
    message: "Created",
  },
  BAD_REQUEST: {
    status: 400,
    message: "Bad Request",
  },
  UNAUTHORIZED: {
    status: 401,
    message: "Unauthorized",
  },
  FORBIDDEN: {
    status: 403,
    message: "Forbidden",
  },
  NOT_FOUND: {
    status: 404,
    message: "Not Found",
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Internal Server Error",
  },
  TOO_MANY_REQUESTS: {
    status: 429,
    message: "Too Many Requests",
  },
};

module.exports = HTTP_STATUS;
