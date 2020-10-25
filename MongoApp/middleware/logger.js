class logger {
  log(req, res, next) {
    console.log(
      `${new Date().toISOString()} :: Url ${JSON.stringify(
        req.url
      )}, Method ${JSON.stringify(req.method)}, Params ${JSON.stringify(
        req.params
      )}, Body ${JSON.stringify(req.body)}`
    );
    next();
  }
}

module.exports = logger;
