const { CustomError } = require('../error/error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).json({
          msg: err.message
        })
    }
    res.status(500).json({
        error: 'Something went wrong. Please try again;'
    })
}

module.exports = errorHandler;