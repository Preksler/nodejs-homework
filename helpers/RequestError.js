const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbbiden",
    404: "Not found",
    409: "Conflict"
}

const RequestError = (status, massage = messages[status]) => {
    const error = new Error(massage);
    error.status = status;
    return error;
}

module.exports = RequestError;