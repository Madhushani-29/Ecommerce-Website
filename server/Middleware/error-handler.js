const {constants}=require("../constants");

const errorHandler=(err, req, res, next)=>{
    const statusCode=res.statusCode ? res.statusCode:200;
    switch (statusCode){
        case constants.OK:
            res.json({Title:"Ok", Message:err.message, stackTracer:err.stack});
            break;
        case constants.CREATED:
            res.json({Title:"Created", Message:err.message, stackTracer:err.stack});
            break;
        case constants.NO_CONTENT:
            res.json({Title:"No Content", Message:err.message, stackTracer:err.stack});
            break;
        case constants.BAD_REQUEST:
            res.json({Title:"Bad Request", Message:err.message, stackTracer:err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;
        case constants.FORBIDDEB:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;            
        case constants.INTERNAL_SERVER_ERROR:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;
        case constants.BAD_GATEWAY:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;
        case constants.SERVICE_UNAVAILABLE:
            res.json({Title:"Not Found", Message:err.message, stackTracer:err.stack});
            break;                                    
    }
}

module.exports={errorHandler};