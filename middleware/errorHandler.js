const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? req.statusCode: 500;
    res.json({ title: "not found", message: err.message, stackTrace: err.stack});  
    res.json({ title: "not found", message: err.message, stackTrace: err.stack});  
};

module.exports = errorHandler;