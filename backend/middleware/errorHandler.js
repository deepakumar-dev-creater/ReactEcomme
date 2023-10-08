
import { isValidObjectId } from 'mongoose';

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };
  
  const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
  

  
    res.status(statusCode).json({
      message: message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };

  const checkObjectId = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
      res.status(404);
      throw new Error(`Invalid ObjectId of:  ${req.params.id}`);
    }
    next();
  }

  export { notFound, errorHandler,checkObjectId};
  