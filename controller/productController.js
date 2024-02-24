function secureProductUploadController(req, res, next) {
  //   console.log(req.headers.authorization.split("@"));
  //   next();
  const userid = req.headers.authorization.split("@")[1];
  const password = req.headers.authorization.split("@")[2];
  if (!req.headers.authorization) {
    res.json({ error: "AUTHORIZATION FAILED" });
  } else {
    next();
  }
}

function createProductController() {
  console.log("create product");
}

module.exports = { createProductController, secureProductUploadController };
