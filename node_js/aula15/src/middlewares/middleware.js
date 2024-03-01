exports.myMiddlewareGlobal = (req, res, next) => {
    res.locals.myViariableLocal = "this value at variable local"
    next();
}