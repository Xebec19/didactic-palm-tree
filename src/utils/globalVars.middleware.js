// below function adds global variables for views
exports.addGlobals = async(req,res,next) => {
    res.locals = {
        baseUrlPrefix: '',
        title: 'Emus'
    }
    next();
}