const router = require("../router-root")

router.use("/v1", require("./v1"))

module.exports = router