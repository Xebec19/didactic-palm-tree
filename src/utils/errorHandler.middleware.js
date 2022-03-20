/**
 * @type : Middleware
 * @desc : adds try catch to every passed controller
 */
exports.errorHandler = (fn) => async(req,res) => {
    try{
    await fn(req,res);
    } catch(error){
        next(error);
    }
}