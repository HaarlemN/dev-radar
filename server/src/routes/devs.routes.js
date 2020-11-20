const { Router } = require("express");

const router = Router();

const DevController = require("./controllers/DevController");

router.get("/devs", DevController.index);
router.post("/devs", DevController.store);

module.exports = router;
